let form;

const handleFormSubmit = (ev) => {
    ev.preventDefault();

    POSTRequest(serializeFrom(form));
}

const serializeFrom = (form) => {
    const elements = form.elements;
    const dataForm = {
        "data" : {
            "answer1": elements.answer__one.value,
            "answer2": elements.answer__two.value,
            "answer3": elements.answer__thee.value,
            "answer4": elements.answer__four.value,
            "answer5": elements.answer__five.value,
            "answer6": elements.answer__six.value,
            "answer7": elements.answer__seven.value,
            "answer8": elements.answer__eight.value,
        }
    }
    return dataForm;
}

const POSTRequest = (data) => {
    fetch('https://validator.courses.7bits.it/homework-4', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(data)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    form = document.getElementById("form__button__send");
    form.addEventListener("submit", handleFormSubmit);
})