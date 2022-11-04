const form = document.querySelector(".login-form");
// const emailInpEl = document.querySelector('.')


const userData = {};

const checkForm = event => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.target;
    
    if (email.value === '' || password.value === '') {
        alert('Необхідно заповнити всі поля');
    } else {
        // const username = {
        //     email: email.value,
        //     password: password.value,
        // };

        userData.username = {
            email: email.value,
            password: password.value,
        };
        
        console.log(userData);
        email.value = '';
        password.value = '';
    }
}


form.addEventListener('submit', checkForm)