// js code starts here
// Player emojis ko input field se select kiya
const player1EmojiInput = document.getElementById("player1-emoji"); // Player 1 ka emoji input
const player2EmojiInput = document.getElementById("player2-emoji"); // Player 2 ka emoji input
const battleBtn = document.getElementById("battle-btn"); // Battle button
const resultText = document.getElementById("result-text"); // Result display karne ka area

// Random number generator function
const getRandomScore = () => Math.floor(Math.random() * 101); // Random score 0-100 ke bich generate karega

// Battle button ke click pe event listener
battleBtn.addEventListener("click", () => {
  // Dono players ke emoji liye
  const player1Emoji = player1EmojiInput.value.trim(); // Player 1 emoji value
  const player2Emoji = player2EmojiInput.value.trim(); // Player 2 emoji value

  // Agar emoji input nahi diya to error dikhayenge
  if (!player1Emoji || !player2Emoji) {
    alert("Dono players apna emoji choose karo! ⚠️"); // Warning agar input missing ho
    return; // Aage code chalane se rok do
  }

  // Random scores generate kiye
  const player1Score = getRandomScore(); // Player 1 ka score
  const player2Score = getRandomScore(); // Player 2 ka score

  // Result calculation aur display
  if (player1Score > player2Score) {
    resultText.innerHTML = `${player1Emoji} (Player 1) ne jeet liya! 🎉 Score: ${player1Score} vs ${player2Score}`;
  } else if (player2Score > player1Score) {
    resultText.innerHTML = `${player2Emoji} (Player 2) ne jeet liya! 🏆 Score: ${player2Score} vs ${player1Score}`;
  } else {
    resultText.innerHTML = `It's a tie! 🤝 Score: ${player1Score} vs ${player2Score}`;
  }

  // Background animation effect for fun
  document.body.style.backgroundColor =
    player1Score > player2Score ? "#c8e6c9" : "#ffcdd2"; // Player 1 wins to green, else red
});
