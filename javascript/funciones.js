/*mensaje de bienvenida*/ 
document.getElementById("boton").onclick= function () {
    console.log("mensaje de bienvenida");
    document.getElementById("boton").innerHTML = "Hola, soy Bruno Gallardo. Espero que les guste el CV Web.";
    document.getElementById("boton").style.border="none";
    document.getElementById("boton").style.background="none";
    document.getElementById("boton").style.fontSize="20px";
}  

/*ver mas y ver menos*/
document.getElementById("vermas").onclick= function (){
    document.getElementById("ver").style.display="block"
}
document.getElementById("vermenos").onclick= function (){
    document.getElementById("ver").style.display="none"
}

/*validacion de formulario*/
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();

    if(nombreValue === '') {
        setError(nombre, 'El nombre es obligatorio');
    } else {
        setSuccess(nombre);
    }

    if(emailValue === '') {
        setError(email, 'Email obligatorio');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email incorrecto');
    } else {
        setSuccess(email);
    }
};