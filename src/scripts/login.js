
let form;

const handleFormSubmit = (ev) => {
    ev.preventDefault();

    POSTRequest(serializeFrom(form));
}

const serializeFrom = (form) => {
    const elements = form.elements;

    const dataForm = {
        "data" : {
            "email": elements.email.value,
            "password": elements.password.value,
        }
    }
    return dataForm;
}

const POSTRequest = (data) => {
    fetch('http://127.0.0.1:5500/templates/listOfQuestionnaires.html', {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(data)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    form = document.getElementById("form__login");
    form.addEventListener("submit", handleFormSubmit);

    
})

// async mounted() {
//     const token = localStorage.getItem('token')

//     if () {
//         await fetch('https://10.1.5.65/api/personal/users/', {
//             method: 'GET', 
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             }
//         });
//     } else {

//     }
// }
