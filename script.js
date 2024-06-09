const text = document.querySelector(".p-adv");
const button = document.querySelector(".btn");
const NumberOfAdvice = document.querySelector(".n-adv");
// Initial fetch
fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        text.textContent = "“" +data.slip.advice + "”";
        NumberOfAdvice.textContent =  "Advice" + data.slip.id;
    })
    .catch(error => {
        console.error("Error fetching advice:", error);
    });

// Function to fetch advice
function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            text.textContent = data.slip.advice;
            NumberOfAdvice.textContent =  "Advice #" + data.slip.id;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
        });
}

button.addEventListener("click", fetchAdvice);