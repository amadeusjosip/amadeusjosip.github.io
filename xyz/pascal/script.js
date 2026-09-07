(() => {
  const pyramidEl = document.querySelector('#pyramid');
  const messageEl = document.querySelector('#message');
  const filledEl = document.querySelector('#filled-count');
  const streakEl = document.querySelector('#streak-count');
  const difficultyEl = document.querySelector('#difficulty');
  const roundOverEl = document.querySelector('#round-over');
  let solution = [];
  let givenKeys = new Set();
  let solved = false;
  let streak = 0;
  try {
    streak = Number(window.sessionStorage.getItem('sum-summit-streak') || 0);
  } catch (_) {
    // Storage can be unavailable when the page is opened directly from disk.
  }
  streakEl.textContent = streak;

  const key = (r, c) => `${r}-${c}`;
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffle = values => {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
      const j = randomInt(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  // A child can solve a triangle whenever two of its three tiles are known.
  // Simulate that process to reject clue patterns that would require algebra.
  function isLocallySolvable(rows, clues) {
    const known = new Set(clues.map(pos => key(pos.r, pos.c)));
    let changed = true;
    while (changed) {
      changed = false;
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c <= r; c++) {
          const triangle = [{ r, c }, { r: r + 1, c }, { r: r + 1, c: c + 1 }];
          if (triangle.filter(pos => known.has(key(pos.r, pos.c))).length >= 2) {
            triangle.forEach(pos => {
              const tileKey = key(pos.r, pos.c);
              if (!known.has(tileKey)) {
                known.add(tileKey);
                changed = true;
              }
            });
          }
        }
      }
    }
    return known.size === rows * (rows + 1) / 2;
  }

  function chooseUniqueClues(rows, values) {
    const positions = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c <= r; c++) positions.push({ r, c });
    }

    for (let attempt = 0; attempt < 500; attempt++) {
      const picked = shuffle(positions).slice(0, rows);
      const rowSet = new Set(picked.map(p => p.r));
      const bottomCount = picked.filter(p => p.r === rows - 1).length;
      const hasFriendlyClue = picked.some(p => values[p.r][p.c] % 5 === 0);
      if (rowSet.size >= 3 && bottomCount <= Math.ceil(rows / 2) && hasFriendlyClue && isLocallySolvable(rows, picked)) return picked;
    }
    return Array.from({ length: rows }, (_, c) => ({ r: rows - 1, c }));
  }

  function makeSolution(rows) {
    const pool = rows === 6 ? [1, 1, 2, 2, 3, 3, 4] : [1, 2, 2, 3, 3, 4, 5];
    const wantedFriendly = rows - 2;
    let best = null;
    let bestCount = -1;
    for (let attempt = 0; attempt < 100; attempt++) {
      const data = Array.from({ length: rows }, (_, r) => Array(r + 1).fill(0));
      data[rows - 1] = Array.from({ length: rows }, () => pool[randomInt(0, pool.length - 1)]);
      for (let r = rows - 2; r >= 0; r--) {
        for (let c = 0; c <= r; c++) data[r][c] = data[r + 1][c] + data[r + 1][c + 1];
      }
      const friendlyCount = data.flat().filter(value => value % 5 === 0).length;
      if (friendlyCount > bestCount) {
        best = data;
        bestCount = friendlyCount;
      }
      if (friendlyCount >= wantedFriendly) return data;
    }
    return best;
  }

  function newPuzzle() {
    const rows = Number(difficultyEl.value);
    solution = makeSolution(rows);
    givenKeys = new Set(chooseUniqueClues(rows, solution).map(pos => key(pos.r, pos.c)));
    solved = false;
    pyramidEl.innerHTML = '';
    roundOverEl.classList.remove('show', 'correct');
    document.querySelector('#confetti').innerHTML = '';

    solution.forEach((rowValues, r) => {
      const row = document.createElement('div');
      row.className = 'row';
      rowValues.forEach((value, c) => {
        const cell = document.createElement('div');
        const isGiven = givenKeys.has(key(r, c));
        cell.className = `cell ${isGiven ? 'given' : 'missing'}`;
        cell.dataset.row = r;
        cell.dataset.col = c;
        if (isGiven) {
          cell.innerHTML = `<span class="given-value">${value}</span><span class="lock" aria-hidden="true">â—</span>`;
          cell.setAttribute('aria-label', `Given number ${value}`);
        } else {
          const input = document.createElement('input');
          input.type = 'number';
          input.min = '0';
          input.max = '999';
          input.inputMode = 'numeric';
          input.autocomplete = 'off';
          input.dataset.answer = value;
          input.setAttribute('aria-label', `Empty tile, row ${r + 1}, position ${c + 1}`);
          input.addEventListener('input', onInput);
          input.addEventListener('keydown', event => { if (event.key === 'Enter') checkAnswers(); });
          cell.appendChild(input);
        }
        row.appendChild(cell);
      });
      pyramidEl.appendChild(row);
    });

    setMessage('Take your timeâ€”youâ€™ve got this.');
    updateFilled();
    pyramidEl.querySelector('input')?.focus();
  }

  function onInput(event) {
    event.target.parentElement.classList.remove('wrong', 'correct');
    if (event.target.value.length > 3) event.target.value = event.target.value.slice(0, 3);
    setMessage('Keep climbing!');
    updateFilled();
  }

  function updateFilled() {
    filledEl.textContent = [...pyramidEl.querySelectorAll('input')].filter(input => input.value !== '').length;
  }

  function setMessage(text, type = '') {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
  }

  function checkAnswers() {
    if (solved) return;
    const inputs = [...pyramidEl.querySelectorAll('input')];
    const empty = inputs.filter(input => input.value === '');
    let wrong = 0;
    inputs.forEach(input => {
      const cell = input.parentElement;
      cell.classList.remove('wrong', 'correct');
      if (input.value !== '') {
        const right = Number(input.value) === Number(input.dataset.answer);
        cell.classList.add(right ? 'correct' : 'wrong');
        if (!right) wrong++;
      }
    });
    if (empty.length) setMessage(`${empty.length} tile${empty.length === 1 ? '' : 's'} still need a number.`, 'error');
    else if (wrong) {
      setMessage(`${wrong} tile${wrong === 1 ? ' was' : 's were'} not quite right.`, 'error');
      endRound(false);
    }
    else win();
    if (!solved) (pyramidEl.querySelector('.wrong input') || empty[0])?.focus();
  }

  function giveHint() {
    if (solved) return;
    const candidates = [...pyramidEl.querySelectorAll('input')].filter(input => Number(input.value) !== Number(input.dataset.answer));
    if (!candidates.length) return checkAnswers();
    const input = candidates[randomInt(0, candidates.length - 1)];
    input.value = input.dataset.answer;
    const cell = input.parentElement;
    cell.classList.remove('wrong');
    cell.classList.add('hinted');
    setTimeout(() => cell.classList.remove('hinted'), 700);
    setMessage('One tile revealed. See how it connects?');
    updateFilled();
  }

  function clearAnswers() {
    if (solved) return;
    pyramidEl.querySelectorAll('input').forEach(input => {
      input.value = '';
      input.parentElement.classList.remove('wrong', 'correct', 'hinted');
    });
    updateFilled();
    setMessage('Fresh start! The given tiles are still here.');
    pyramidEl.querySelector('input')?.focus();
  }

  function win() {
    solved = true;
    streak++;
    try {
      window.sessionStorage.setItem('sum-summit-streak', streak);
    } catch (_) {
      // The game still works when browser privacy settings block storage.
    }
    streakEl.textContent = streak;
    setMessage('Summit reached! Every number is right. â˜…', 'success');
    endRound(true);
  }

  function endRound(correct) {
    solved = true;
    pyramidEl.querySelectorAll('input').forEach(input => { input.disabled = true; });
    roundOverEl.classList.toggle('correct', correct);
    document.querySelector('#round-icon').textContent = correct ? 'â˜…' : 'â†—';
    document.querySelector('#round-title').textContent = correct ? 'Summit reached!' : 'Good climb!';
    document.querySelector('#round-note').textContent = correct ? 'Every number is right.' : 'Some tiles were tricky. Try a fresh one!';
    roundOverEl.classList.add('show');
    launchConfetti();
    document.querySelector('#round-new').focus();
  }

  function launchConfetti() {
    const box = document.querySelector('#confetti');
    const colors = ['#ef654f', '#f2c95c', '#86b7d8', '#a9d9c5'];
    for (let i = 0; i < 48; i++) {
      const piece = document.createElement('i');
      piece.style.left = `${randomInt(4, 96)}vw`;
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = `${Math.random() * .55}s`;
      piece.style.setProperty('--drift', `${randomInt(-80, 80)}px`);
      box.appendChild(piece);
    }
    setTimeout(() => { box.innerHTML = ''; }, 2600);
  }

  document.querySelector('#new-puzzle').addEventListener('click', newPuzzle);
  document.querySelector('#round-new').addEventListener('click', newPuzzle);
  difficultyEl.addEventListener('change', newPuzzle);
  document.querySelector('#check').addEventListener('click', checkAnswers);
  document.querySelector('#hint').addEventListener('click', giveHint);
  document.querySelector('#clear').addEventListener('click', clearAnswers);
  newPuzzle();
})();
