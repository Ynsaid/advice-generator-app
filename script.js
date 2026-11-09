const adviceText = document.querySelector(".p-adv");
const adviceButton = document.querySelector(".btn");
const adviceNumber = document.querySelector(".n-adv");

async function fetchAdvice() {
    
  try {
    adviceButton.disabled = true;
    adviceText.textContent = "Loading...";

    const response = await fetch(
      `https://api.adviceslip.com/advice?t=${Date.now()}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    adviceText.textContent = `“${data.slip.advice}”`;
    adviceNumber.textContent = `Advice #${data.slip.id}`;

    adviceText.style.fontSize = "36px"
    adviceNumber.style.fontSize = "36px"
      
  } catch (error) {
    console.error("Error fetching advice:", error);
    adviceText.textContent = "Sorry, could not load advice. Please try again.";
  } finally {
    adviceButton.disabled = false;
  }
}

adviceButton.addEventListener("click", fetchAdvice);

fetchAdvice();
