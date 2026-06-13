const practiceWords = [
  "Morgen",
  "jetzt",
  "die Stunde",
  "die Mäuse",
  "fressen",
  "frisst",
  "der Frühling",
  "der Sommer",
  "der Herbst",
  "der Winter",
  "schreiben",
  "zeichnen",
  "am liebsten",
  "das Blatt",
  "wir waren",
  "mehr",
  "besser",
  "der Tag",
  "die Woche",
  "der Monat",
  "das Jahr",
  "schlafen",
  "in der Früh",
  "zu Mittag",
  "am Vormittag",
  "am Nachmittag",
  "lieber",
  "leicht",
  "gewonnen",
  "kochen",
  "schnell",
  "finster",
  "bekommen",
  "der Stern",
  "trinken",
  "ich trinke",
  "finden",
  "gefunden",
  "können",
  "ich kann",
  "du kannst",
  "lesen",
  "ich lese",
  "du liest",
  "schlafen",
  "ich schlafe",
  "du schläfst",
  "gehen",
  "ich gehe",
  "du gehst",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
  "Jänner",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "das Mädchen",
  "die Sonne",
  "der Schnee",
  "liegen",
  "die Ohren",
  "das Auge",
  "Mittwoch",
  "Dienstag",
  "Donnerstag",
  "die Freundin",
  "der Freund",
  "sich verkleiden",
  "herein",
  "das Glas",
  "die Gänse",
  "der Schuh",
  "die Schuhe",
  "fahren",
  "er fährt",
  "Weihnachten",
  "der Advent",
  "es geht",
  "mehr",
  "das Dach",
  "die Dacher",
  "der Schuler",
  "die Schulerin",
  "das Zimmer",
  "die Geschichte",
  "der Wunsch",
  "die Wünsche",
  "der Fuß",
  "die Füße",
  "der Zahn",
  "die Zahne",
  "essen",
  "ich esse",
  "du isst",
  "aussehen",
  "der Regen",
  "Samstag",
  "Sonntag",
  "am Tag",
  "gefallen",
  "In der Fruh"
];

const emojiRules = [
  [["morgen", "fruh"], "🌅", "Listen and fill the missing letters."],
  [["stunde", "mittag", "vormittag", "nachmittag"], "🕒", "Listen and fill the missing letters."],
  [["maus", "mause", "gans", "ganse"], "🐭", "Listen and fill the missing letters."],
  [["fruhling", "sommer", "herbst", "winter"], "🌦️", "Listen and fill the missing letters."],
  [["schreiben", "zeichnen", "blatt", "geschichte"], "✏️", "Listen and fill the missing letters."],
  [["tag", "woche", "monat", "jahr"], "📅", "Listen and fill the missing letters."],
  [["schlafen", "nacht"], "😴", "Listen and fill the missing letters."],
  [["kochen", "essen", "trinken", "frisst", "fressen"], "🍽️", "Listen and fill the missing letters."],
  [["stern", "sonne", "schnee", "regen"], "☀️", "Listen and fill the missing letters."],
  [["lesen", "buch"], "📖", "Listen and fill the missing letters."],
  [["juli", "august", "september", "oktober", "november", "dezember", "janner", "februar", "marz", "april", "mai", "juni"], "🗓️", "Listen and fill the missing letters."],
  [["madchen", "freundin", "freund"], "😊", "Listen and fill the missing letters."],
  [["ohren", "auge", "fuss", "fusse", "zahn"], "👂", "Listen and fill the missing letters."],
  [["mittwoch", "dienstag", "donnerstag", "samstag", "sonntag"], "📆", "Listen and fill the missing letters."],
  [["glas"], "🥛", "Listen and fill the missing letters."],
  [["schuh"], "👟", "Listen and fill the missing letters."],
  [["fahren"], "🚗", "Listen and fill the missing letters."],
  [["weihnachten", "advent"], "🎄", "Listen and fill the missing letters."],
  [["dach", "zimmer"], "🏠", "Listen and fill the missing letters."]
];

const defaultWords = practiceWords.map((word) => decorateWord(word));
const wordsStorageKey = "wordGardenGermanWords";

const wordRewards = [
  ["🎉", "Fantastic!"],
  ["🌈", "So bright!"],
  ["🪄", "Magic writing!"],
  ["🏆", "Champion!"],
  ["🎈", "Hooray!"],
  ["💎", "Sparkly work!"],
  ["🚀", "You zoomed!"],
  ["🍭", "Sweet win!"]
];

const elements = {
  homeScreen: document.querySelector("#home-screen"),
  germanScreen: document.querySelector("#german-screen"),
  mathScreen: document.querySelector("#math-screen"),
  openGerman: document.querySelector("#open-german"),
  openMath: document.querySelector("#open-math"),
  germanHome: document.querySelector("#german-home"),
  mathHome: document.querySelector("#math-home"),
  emoji: document.querySelector("#emoji-clue"),
  phrase: document.querySelector("#phrase-clue"),
  prompt: document.querySelector("#word-prompt"),
  input: document.querySelector("#answer-input"),
  check: document.querySelector("#check-button"),
  hint: document.querySelector("#hint"),
  stars: document.querySelector("#stars"),
  streak: document.querySelector("#streak"),
  round: document.querySelector("#round"),
  speak: document.querySelector("#speak-button"),
  skip: document.querySelector("#skip-button"),
  rewardLayer: document.querySelector("#reward-layer"),
  rewardEmoji: document.querySelector("#reward-emoji"),
  rewardText: document.querySelector("#reward-text"),
  settings: document.querySelector("#settings-button"),
  studio: document.querySelector("#studio-panel"),
  closeStudio: document.querySelector("#close-studio"),
  wordList: document.querySelector("#word-list"),
  saveWords: document.querySelector("#save-words"),
  resetWords: document.querySelector("#reset-words"),
  timeOptions: document.querySelector("#time-options"),
  timerDisplay: document.querySelector("#timer-display"),
  startMath: document.querySelector("#start-math"),
  newMath: document.querySelector("#new-math"),
  finishMath: document.querySelector("#finish-math"),
  worksheet: document.querySelector("#worksheet"),
  mathCorrect: document.querySelector("#math-correct"),
  mathLeft: document.querySelector("#math-left")
};

let words = loadWords();
let currentIndex = -1;
let currentWord = words[0];
let stars = Number(localStorage.getItem("wordGardenStars") || 0);
let streak = 0;
let round = 1;
let mathSelectedMinutes = 10;
let mathProblems = [];
let mathTimer = null;
let mathDeadline = 0;
let mathStarted = false;
let mathEnded = false;

function showScreen(screenName) {
  elements.homeScreen.classList.toggle("hidden", screenName !== "home");
  elements.germanScreen.classList.toggle("hidden", screenName !== "german");
  elements.mathScreen.classList.toggle("hidden", screenName !== "math");

  if (screenName === "german") {
    closeStudio();
    elements.input.focus();
  }

  if (screenName === "math") {
    ensureMathWorksheet();
  }
}

function normalize(value) {
  return value
    .trim()
    .toLocaleLowerCase("de-DE")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function cleanWord(value) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^a-zA-ZäöüÄÖÜß\s-]/g, "");
}

function isLetter(character) {
  return /[a-zA-ZäöüÄÖÜß]/.test(character);
}

function decorateWord(word) {
  const normalized = normalize(word);
  const match = emojiRules.find(([keys]) => keys.some((key) => normalized.includes(key)));

  return {
    word,
    emoji: match ? match[1] : "✨",
    clue: match ? match[2] : "Listen and fill the missing letters."
  };
}

function hiddenLettersOf(value) {
  return value
    .split(/(\s+|-)/)
    .map((part) => {
      const letters = [...part].filter(isLetter);
      if (letters.length <= 2) {
        return "";
      }
      return [...part].filter((character, index) => isLetter(character) && index > 0 && index < part.length - 1).join("");
    })
    .join("");
}

function loadWords() {
  const saved = localStorage.getItem(wordsStorageKey);
  if (!saved) {
    return defaultWords;
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultWords;
  } catch {
    return defaultWords;
  }
}

function saveWordState(nextWords) {
  localStorage.setItem(wordsStorageKey, JSON.stringify(nextWords));
}

function renderScore() {
  elements.stars.textContent = stars;
  elements.streak.textContent = streak;
  elements.round.textContent = round;
}

function renderPrompt(word) {
  elements.prompt.replaceChildren();

  word.split(/(\s+|-)/).forEach((part) => {
    if (/^\s+$/.test(part)) {
      const space = document.createElement("span");
      space.className = "word-space";
      space.textContent = " ";
      elements.prompt.append(space);
      return;
    }

    if (part === "-") {
      const hyphen = document.createElement("span");
      hyphen.className = "word-hyphen";
      hyphen.textContent = "-";
      elements.prompt.append(hyphen);
      return;
    }

    const letters = [...part].filter(isLetter);
    [...part].forEach((letter, index) => {
      const tile = document.createElement("span");
      tile.className = "tile";
      if (!isLetter(letter) || index === 0 || index === part.length - 1 || letters.length <= 2) {
        tile.textContent = letter;
      } else {
        tile.textContent = "·";
        tile.classList.add("missing");
      }
      elements.prompt.append(tile);
    });
  });
}

function pickWord() {
  if (!words.length) {
    words = defaultWords;
  }

  let nextIndex = Math.floor(Math.random() * words.length);
  if (words.length > 1) {
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * words.length);
    }
  }

  currentIndex = nextIndex;
  currentWord = words[currentIndex];
  elements.emoji.textContent = currentWord.emoji || "✨";
  elements.phrase.textContent = currentWord.clue || "Listen and fill the missing letters.";
  elements.input.value = "";
  elements.input.maxLength = Math.max(currentWord.word.length + 4, hiddenLettersOf(currentWord.word).length + 2, 3);
  elements.hint.className = "hint";
  elements.hint.textContent = "Listen, look, and fill the hidden letters.";
  renderPrompt(currentWord.word);
}

function showReward(emoji, text, duration = 1450, afterClose = null) {
  elements.rewardEmoji.textContent = emoji;
  elements.rewardText.textContent = text;
  elements.rewardLayer.classList.add("show");
  elements.rewardLayer.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    elements.rewardLayer.classList.remove("show");
    elements.rewardLayer.setAttribute("aria-hidden", "true");
    if (afterClose) {
      afterClose();
    }
  }, duration);
}

function showWordReward() {
  const reward = wordRewards[Math.floor(Math.random() * wordRewards.length)];
  showReward(reward[0], reward[1], 1450, () => {
    round += 1;
    renderScore();
    pickWord();
    elements.input.focus();
  });
}

function checkAnswer() {
  const hiddenAnswer = normalize(hiddenLettersOf(currentWord.word)).replace(/\s/g, "");
  const fullAnswer = normalize(currentWord.word);
  const given = normalize(elements.input.value);
  const compactGiven = given.replace(/\s/g, "");

  if (compactGiven === hiddenAnswer || given === fullAnswer) {
    stars += 1;
    streak += 1;
    localStorage.setItem("wordGardenStars", String(stars));
    elements.hint.className = "hint success";
    elements.hint.textContent = `Yes! The word is ${currentWord.word}.`;
    renderScore();
    showWordReward();
    speak(currentWord.word);
    return;
  }

  streak = 0;
  elements.hint.className = "hint try";
  elements.hint.textContent = "Try again. You can type the hidden letters or the whole word.";
  renderScore();
  elements.input.select();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.82;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function serializeWords() {
  return words.map((item) => `${item.word}, ${item.emoji || "✨"}, ${item.clue || ""}`).join("\n");
}

function parseWords(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",").map((part) => part.trim());
      const word = cleanWord(parts[0]);
      const decorated = decorateWord(word);
      return {
        word,
        emoji: parts[1] || decorated.emoji,
        clue: parts.slice(2).join(", ") || decorated.clue
      };
    })
    .filter((item) => item.word.length >= 2);
}

function openStudio() {
  elements.wordList.value = serializeWords();
  elements.studio.classList.add("open");
  elements.wordList.focus();
}

function closeStudio() {
  elements.studio.classList.remove("open");
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeAdditionProblem() {
  let left = randomInt(4, 79);
  let right = randomInt(3, 35);
  while (left + right > 100) {
    left = randomInt(4, 79);
    right = randomInt(3, 35);
  }

  return {
    left,
    operator: "+",
    right,
    answer: left + right
  };
}

function makeSubtractionProblem() {
  const left = randomInt(20, 100);
  const right = randomInt(2, Math.min(49, left));

  return {
    left,
    operator: "-",
    right,
    answer: left - right
  };
}

function shuffle(items) {
  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function createMathProblems() {
  const additions = Array.from({ length: 12 }, makeAdditionProblem);
  const subtractions = Array.from({ length: 12 }, makeSubtractionProblem);
  return shuffle([...additions, ...subtractions]);
}

function ensureMathWorksheet() {
  if (!mathProblems.length) {
    resetMathWorksheet();
  }
}

function resetMathWorksheet() {
  stopMathTimer();
  mathProblems = createMathProblems();
  mathStarted = false;
  mathEnded = false;
  updateTimerDisplay(mathSelectedMinutes * 60);
  renderMathWorksheet();
  updateMathProgress();
}

function renderMathWorksheet() {
  elements.worksheet.replaceChildren();
  mathProblems.forEach((problem, index) => {
    const row = document.createElement("label");
    row.className = "problem";
    row.dataset.index = String(index);

    const equation = document.createElement("span");
    equation.textContent = `${problem.left} ${problem.operator} ${problem.right} =`;

    const input = document.createElement("input");
    input.type = "tel";
    input.inputMode = "numeric";
    input.pattern = "[0-9]*";
    input.disabled = !mathStarted || mathEnded;
    input.setAttribute("aria-label", `${problem.left} ${problem.operator} ${problem.right}`);
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 3);
      markProblem(row, problem, input.value);
      updateMathProgress();
      if (mathStarted && !mathEnded && allMathCorrect()) {
        endMath(true);
      }
    });

    row.append(equation, input);
    elements.worksheet.append(row);
  });
}

function markProblem(row, problem, value) {
  row.classList.remove("correct", "wrong");
  if (!value) {
    return;
  }

  row.classList.add(Number(value) === problem.answer ? "correct" : "wrong");
}

function getMathInputs() {
  return [...elements.worksheet.querySelectorAll("input")];
}

function countCorrectMath() {
  return getMathInputs().filter((input, index) => Number(input.value) === mathProblems[index].answer).length;
}

function allMathCorrect() {
  return mathProblems.length > 0 && countCorrectMath() === mathProblems.length;
}

function updateMathProgress() {
  const correct = countCorrectMath();
  elements.mathCorrect.textContent = correct;
  elements.mathLeft.textContent = Math.max(mathProblems.length - correct, 0);
}

function updateTimerDisplay(totalSeconds) {
  const seconds = Math.max(0, totalSeconds);
  const minutesPart = Math.floor(seconds / 60);
  const secondsPart = seconds % 60;
  elements.timerDisplay.textContent = `${minutesPart}:${String(secondsPart).padStart(2, "0")}`;
}

function stopMathTimer() {
  if (mathTimer) {
    window.clearInterval(mathTimer);
    mathTimer = null;
  }
}

function startMathTimer() {
  stopMathTimer();
  mathDeadline = Date.now() + mathSelectedMinutes * 60 * 1000;
  updateTimerDisplay(mathSelectedMinutes * 60);

  mathTimer = window.setInterval(() => {
    const remaining = Math.ceil((mathDeadline - Date.now()) / 1000);
    updateTimerDisplay(remaining);
    if (remaining <= 0) {
      endMath(allMathCorrect());
    }
  }, 250);
}

function startMath() {
  if (mathEnded || !mathProblems.length) {
    resetMathWorksheet();
  }

  mathStarted = true;
  mathEnded = false;
  renderMathWorksheet();
  startMathTimer();
  const firstInput = elements.worksheet.querySelector("input");
  if (firstInput) {
    firstInput.focus();
  }
}

function endMath(wasSuccessful) {
  if (mathEnded) {
    return;
  }

  mathEnded = true;
  stopMathTimer();
  getMathInputs().forEach((input) => {
    input.disabled = true;
  });
  updateTimerDisplay(Math.max(0, Math.ceil((mathDeadline - Date.now()) / 1000)));
  showReward(wasSuccessful ? "😄" : "😢", wasSuccessful ? "All done!" : "Time is up!", 2400);
}

function selectMathTime(minutes) {
  mathSelectedMinutes = minutes;
  [...elements.timeOptions.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.minutes) === minutes);
  });

  if (!mathStarted || mathEnded) {
    updateTimerDisplay(mathSelectedMinutes * 60);
  }
}

elements.openGerman.addEventListener("click", () => showScreen("german"));
elements.openMath.addEventListener("click", () => showScreen("math"));
elements.germanHome.addEventListener("click", () => showScreen("home"));
elements.mathHome.addEventListener("click", () => {
  resetMathWorksheet();
  showScreen("home");
});

elements.check.addEventListener("click", checkAnswer);
elements.input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

elements.skip.addEventListener("click", () => {
  streak = 0;
  round += 1;
  renderScore();
  pickWord();
});

elements.speak.addEventListener("click", () => speak(currentWord.word));
elements.settings.addEventListener("click", openStudio);
elements.closeStudio.addEventListener("click", closeStudio);

elements.saveWords.addEventListener("click", () => {
  const nextWords = parseWords(elements.wordList.value);
  if (!nextWords.length) {
    elements.wordList.value = serializeWords();
    return;
  }

  words = nextWords;
  saveWordState(words);
  closeStudio();
  pickWord();
});

elements.resetWords.addEventListener("click", () => {
  words = defaultWords;
  saveWordState(words);
  elements.wordList.value = serializeWords();
  pickWord();
});

elements.timeOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-minutes]");
  if (!button) {
    return;
  }
  selectMathTime(Number(button.dataset.minutes));
});

elements.startMath.addEventListener("click", startMath);
elements.newMath.addEventListener("click", resetMathWorksheet);
elements.finishMath.addEventListener("click", () => {
  if (mathStarted && !mathEnded) {
    endMath(allMathCorrect());
  }
});

renderScore();
pickWord();
selectMathTime(10);
