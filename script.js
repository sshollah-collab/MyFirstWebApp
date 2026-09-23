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
