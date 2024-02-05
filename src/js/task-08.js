const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value && password.value !== '') {
        const dataForm = {};
        const elements = formEl.elements;
        for (let i = 0; i < elements.length; i += 1) {
            let element = elements[i];

            if (element.type !== 'submit') {
                dataForm[element.name] = element.value;
            }
        }
        console.log(dataForm);
        // dataForm[email.name, password.name] = email.value, password.value;
        // console.log(dataForm);
    } else {
        alert('Any field cannot be empty');
    }
})
