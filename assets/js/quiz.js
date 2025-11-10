// --- Basic Quiz Script ---

// An array (list) of question objects.
const questions = [
  {
    number: 1,
    text: "What material is known as the most sustainable?",
    answers: ["Cotton", "Linen", "Polyester"],
  },
  {
    number: 2,
    text: "Which fabric uses the least water to produce?",
    answers: ["Wool", "Silk", "Hemp"],
  },
  {
    number: 3,
    text: "What color symbolizes sustainability?",
    answers: ["Red", "Blue", "Green"],
  },
  {
    number: 4,
    text: "Which brand promotes eco-fashion?",
    answers: ["H&M Conscious", "Zara Fast", "Gucci Regular"],
  },
  {
    number: 5,
    text: "What is the key idea of slow fashion?",
    answers: ["Buy less, choose well", "Fast trends", "Daily shopping"],
  },
];

// To track the question number you are on
let currentQuestion = 0;

// we "find" the element we want and initialize them as new variables
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question-title");
const answerButtons = document.getElementById("answer-buttons");

// --- Function to display a question on screen ---
function showQuestion(index) {
  // Get the question object from our questions array and we call it "q"
  const q = questions[index];

  // Update the text on the page (e.g., "Question 2/5")
  questionNumber.textContent = "Question " + q.number + "/5";

  // Show the actual question
  document.getElementById("question-text").textContent = q.text;

  // Remove any old answer buttons from the previous question
  answerButtons.innerHTML = "";

  // Loop through all answers for the current question
  q.answers.forEach((answer) => {
    // Create a new <button> element for each answer
    const btn = document.createElement("button");

    // Add the text (e.g., "Answer A", "Answer B", etc.)
    btn.textContent = answer;

    // Give it the same CSS class as the other buttons
    btn.classList.add("answer-btn");
    
    // When clicked, run the function handleAnswer()
    btn.addEventListener("click", () => handleAnswer());
    // Add the button into the "answer-buttons" container
    answerButtons.appendChild(btn);
  });
}

// --- Function that runs when a player clicks an answer ---
function handleAnswer() {
  // Show a small popup message saying "Nice!"
  showNotification("Nice! Moving to next question...");

  // Move to the next question (increase index by 1)
  currentQuestion++;

  // If there are still questions left...
  if (currentQuestion < questions.length) {
    // ...wait a bit and then show the next one
    setTimeout(() => showQuestion(currentQuestion), 4000);
  } else {
    // If we’ve reached the end of the quiz...
    setTimeout(() => {
      // Show a final popup message
      showNotification("Quiz finished!");

      // Replace the top text and subtitle
      questionNumber.textContent = "All done!";
      questionTitle.textContent = "Thanks for playing! You did great!";

      // Replace the question text with your closing message
      document.getElementById("question-text").textContent = "Follow CPHFW on Instagram!";

      // Remove any leftover buttons
      answerButtons.innerHTML = "";
    }, 1200);
  }
}

// --- Function to show a quick notification popup on the screen ---
function showNotification(text) {
  // Create a new <div> element
  const note = document.createElement("div");

  // Add the text we want to display
  note.textContent = text;

  // Style it visually (using inline styles for simplicity)
  note.style.position = "fixed";                // stays in place even if the page scrolls
  note.style.top = "20px";                      // 20px from the top
  note.style.left = "50%";                      // centered horizontally
  note.style.transform = "translateX(-50%)";    // adjusts to perfect center
  note.style.backgroundColor = "rgba(255,255,255,0.9)";
  note.style.color = "#333";
  note.style.padding = "1rem 2rem";
  note.style.borderRadius = "20px";
  note.style.fontFamily = "Avenir Next, sans-serif";
  note.style.fontSize = "2rem";
  note.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  note.style.zIndex = "999";


  // Add the note to the page
  document.body.appendChild(note);

  // Remove it after 1 second
  setTimeout(() => note.remove(), 4000);
}

// --- Start the quiz for the first time ---
showQuestion(currentQuestion);  // This loads question 1 as soon as the page opens
