const emojiDetails = [
  {
    emoji: "😀",
    description: "Grinning Face",
  },
  {
    emoji: "😁",
    description: "Beaming Face with Smiling Eyes",
  },
  {
    emoji: "😂",
    description: "Face with Tears of Joy",
  },
  {
    emoji: "🤣",
    description: "Rolling on the Floor Laughing",
  },
  {
    emoji: "😃",
    description: "Grinning Face with Big Eyes",
  },
  {
    emoji: "😄",
    description: "Grinning Face with Smiling Eyes",
  },
  {
    emoji: "😅",
    description: "Grinning Face with Sweat",
  },
  {
    emoji: "😆",
    description: "Grinning Squinting Face",
  },
  {
    emoji: "😉",
    description: "Winking Face",
  },
  {
    emoji: "😊",
    description: "Smiling Face with Smiling Eyes",
  },
  {
    emoji: "😋",
    description: "Face Savoring Food",
  },
  {
    emoji: "😎",
    description: "Smiling Face with Sunglasses",
  },
  {
    emoji: "😍",
    description: "Smiling Face with Heart-Eyes",
  },
  {
    emoji: "😘",
    description: "Face Blowing a Kiss",
  },
  {
    emoji: "😗",
    description: "Kissing Face",
  },
  {
    emoji: "😙",
    description: "Kissing Face with Smiling Eyes",
  },
  {
    emoji: "😚",
    description: "Kissing Face with Closed Eyes",
  },
  {
    emoji: "🙂",
    description: "Slightly Smiling Face",
  },
  {
    emoji: "🤗",
    description: "Hugging Face",
  },
  {
    emoji: "🤩",
    description: "Star-Struck",
  },
  {
    emoji: "🤔",
    description: "Thinking Face",
  },
  {
    emoji: "😐",
    description: "Neutral Face",
  },
  {
    emoji: "😑",
    description: "Expressionless Face",
  },
  {
    emoji: "😶",
    description: "Face Without Mouth",
  },
  {
    emoji: "🙄",
    description: "Face with Rolling Eyes",
  },
  {
    emoji: "😏",
    description: "Smirking Face",
  },
  {
    emoji: "😣",
    description: "Persevering Face",
  },
  {
    emoji: "😥",
    description: "Sad but Relieved Face",
  },
  {
    emoji: "😮",
    description: "Face with Open Mouth",
  },
  {
    emoji: "🤐",
    description: "Zipper-Mouth Face",
  },
  {
    emoji: "😯",
    description: "Hushed Face",
  },
  {
    emoji: "😪",
    description: "Sleepy Face",
  },
  {
    emoji: "😴",
    description: "Sleeping Face",
  },
  {
    emoji: "😌",
    description: "Relieved Face",
  },
  {
    emoji: "😛",
    description: "Face with Tongue",
  },
  {
    emoji: "😜",
    description: "Winking Face with Tongue",
  },
  {
    emoji: "😝",
    description: "Squinting Face with Tongue",
  },
  {
    emoji: "🤤",
    description: "Drooling Face",
  },
  {
    emoji: "😒",
    description: "Unamused Face",
  },
  {
    emoji: "😓",
    description: "Downcast Face with Sweat",
  },
  {
    emoji: "😔",
    description: "Pensive Face",
  },
  {
    emoji: "😕",
    description: "Confused Face",
  },
  {
    emoji: "🙃",
    description: "Upside-Down Face",
  },
  {
    emoji: "🤑",
    description: "Money-Mouth Face",
  },
  {
    emoji: "😲",
    description: "Astonished Face",
  },
  {
    emoji: "☹️",
    description: "Frowning Face",
  },
  {
    emoji: "🙁",
    description: "Slightly Frowning Face",
  },
  {
    emoji: "😖",
    description: "Confounded Face",
  },
  {
    emoji: "😞",
    description: "Disappointed Face",
  },
  {
    emoji: "😟",
    description: "Worried Face",
  },
  {
    emoji: "😤",
    description: "Face with Steam from Nose",
  },
  {
    emoji: "😢",
    description: "Crying Face",
  },
];

let currentEmojiIndex = 0;
let score = 0;
let seconds = 30;
let timer;

const descriptionEl = document.getElementById("description");
const guessInputEl = document.getElementById("guess-input");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

function displayEmoji() {
  descriptionEl.textContent = emojiDetails[currentEmojiIndex].emoji;
  timerEl.textContent = `Time: ${seconds}s`;
}

function checkGuess() {
  const guess = guessInputEl.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctEmoji) {
    resultEl.textContent = "Correct Guess ✅!";
    score++;
  } else {
    resultEl.textContent = "Wrong Guess ❎!";
  }
  scoreEl.textContent = `Score: ${score}`;
  guessInputEl.value = "";
  guessInputEl.focus();
  nextEmoji();
}

function nextEmoji() {
  currentEmojiIndex++;
  if (currentEmojiIndex >= emojiDetails.length) {
    currentEmojiIndex = 0;
  } else {
    displayEmoji();
  }
}

guessInputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// displayEmoji();
document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  startTimer();
});

function startTimer() {
  timer = setInterval(() => {
    seconds--;
    timerEl.textContent = `Time: ${seconds}s`;

    if (seconds <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  document.getElementById("guess-input").disabled = true;
  timerEl.textContent = "";
}
