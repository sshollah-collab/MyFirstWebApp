// Week 4 - Form interaction

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
});


// Week 5 - DOM interaction

const topic = document.getElementById("topic");
const topicMessage = document.getElementById("topicMessage");
const contactHeading = document.getElementById("contactHeading");

topic.addEventListener("change", function () {

    const selectedTopic =
        topic.options[topic.selectedIndex].text;

    topicMessage.textContent =
        `You selected ${selectedTopic}. Let's keep learning!`;

    contactHeading.textContent =
        `Let's talk about ${selectedTopic}`;
});


// Week 5 - JavaScript API

const duckButton = document.getElementById("duckButton");
const duckResult = document.getElementById("duckResult");

duckButton.addEventListener("click", function () {

    fetch("https://random-d.uk/api/random")
        .then(response => response.json())
        .then(data => {

            const imageUrl = data.url.replace("http://", "https://");

duckResult.innerHTML = `
    <img src="${imageUrl}" alt="Random duck image">
`;

        })
        .catch(error => {

            duckResult.textContent =
                "Sorry, the duck image could not be loaded.";

            console.error(error);
        });
});
