

document.getElementById('form__login').addEventListener('submit', function(event) {
    event.preventDefault()
   

    let email = document.getElementById('email_log').value
    let password = document.getElementById('password_log').value

    const users = { email: email, password: password }

    localStorage.setItem('users', JSON.stringify(users));

    

    fetch('https://10.1.5.65/api/personal/users/', {
    
        method: 'POST', 
        headers: new Headers({
            "Authorization": localStorage.getItem('token'),
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        }),
         body: {
            "email": email,
            "password": password
         }
    })
    .then((response) => response.json())
    .then(responseData => { localStorage.setItem('token') })
    .catch(error => { console.log(error); });
            
})





