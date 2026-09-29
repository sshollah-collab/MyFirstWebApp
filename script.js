const topic = document.getElementById("topic");
const topicMessage = document.getElementById("topicMessage");

topic.addEventListener("change", function () {
    topicMessage.textContent =
        `You selected ${topic.options[topic.selectedIndex].text}. Let's keep learning!`;
});const contactHeading = document.getElementById("contactHeading");

topic.addEventListener("change", function () {
    contactHeading.textContent =
        `Let's talk about ${topic.options[topic.selectedIndex].text}`;
});
const form = document.querySelector(".form-section form");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const topicSelect = document.getElementById("topic");

    const topicText =
        topicSelect.options[topicSelect.selectedIndex].text;

    formMessage.textContent =
        `Thank you, ${name}. Your message about ${topicText} has been received.`;

    formMessage.classList.add("success");

    form.reset();
});const duckButton = document.getElementById("duckButton");
const duckResult = document.getElementById("duckResult");

duckButton.addEventListener("click", function () {
    fetch("https://random-d.uk/api/random")
        .then(response => response.json())
        .then(data => {
            duckResult.innerHTML = `
                <img src="${data.url}" alt="Random duck image">
            `;
        })
        .catch(error => {
            duckResult.textContent =
                "Sorry, the duck image could not be loaded.";
            console.error(error);
        });
});
