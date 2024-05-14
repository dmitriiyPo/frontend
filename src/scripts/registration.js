document.getElementById('form__reg').addEventListener('submit', function(event) {

    let email = document.getElementById('email__reg').value
    let password = document.getElementById('password__reg').value
    let password__again = document.getElementById('password__reg__again').value

    const users__registration = { email: email, password: password, password: password__again }

    localStorage.setItem('users__registration', JSON.stringify(users__registration));

    if ((email.length === 0) || (password.length === 0) || (password__again.length === 0) || (password != password__again)){
        event.preventDefault()
    }
})




// let form;

// const handleFormSubmit = (ev) => {
//     ev.preventDefault();

//     POSTRequest(serializeFrom(form));
// }

// const serializeFrom = (form) => {
//     const elements = form.elements;
//     const dataForm = {
//         "data" : {
//             "email": elements.email,
//             "password": elements.password,
//             "password__again": elements.password__again,
           
//         }
//     }
//     return dataForm;
// }

// const POSTRequest = (data) => {
//     fetch('https://validator.courses.7bits.it/homework-4', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         },
//         body: JSON.stringify(data)
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     form = document.getElementById("form__button__send");
//     form.addEventListener("submit", handleFormSubmit);
// })