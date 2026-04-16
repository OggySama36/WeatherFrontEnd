const body = document.body;
const usernameLogin = document.getElementById('usernameLogin');
const passwordLogin = document.getElementById('passwordLogin');
const usernameRegister = document.getElementById('usernameRegister');
const passwordRegister = document.getElementById('passwordRegister');
const usernamelogin = document.querySelector('.usernamelogin');
const passwordlogin = document.querySelector('.passwordlogin');
const usernameregister = document.querySelector('.usernameregister');
const passwordregister = document.querySelector('.passwordregister');
const email = document.querySelector('.email');
const Email = document.getElementById('Email');
const phonenumber = document.querySelector('.phonenumber');
const phoneNumber = document.getElementById('phoneNumber');
const submitLogin = document.getElementById('submitLogin');
const submitRegister = document.getElementById('submitRegister');
const showLogin = document.querySelector('.showLogin');
const hideLogin = document.querySelector('.hideLogin');
const showRegister = document.querySelector('.showRegister');
const hideRegister = document.querySelector('.hideRegister');
const switchFormButton = document.querySelector('.switchFormButton');
const textSwitchForm = document.querySelector('.textSwitchForm');
const formLogin = document.querySelector('.formLogin');
const formRegister = document.querySelector('.formRegister');
const personal = document.getElementById('personal');
const randomBg = [
    "aurora.png",
    "city.png",
    "china.png",
    "dubai.png",
    "japan.png",
    "thuydien.png",
    "usa.png",
    "japan1.jpg",
    "australia.jpg",
    "giza.jpg",
    "giza1.jpg",
    "bermuda.jpg"
];
setInterval(() => {
    const randomBgNum = Math.floor(Math.random() * randomBg.length);
    body.style.backgroundImage = `url('${randomBg[randomBgNum]}')`;
}, 3000);

usernameLogin.addEventListener('focus', function(){
    usernamelogin.style.transform = "translateY(-20px)";
    usernamelogin.style.color = "white";
});
usernameLogin.addEventListener('blur', function(){
    if (usernameLogin.value !== ""){
        usernamelogin.style.color = "grey";
    }
    else {
        usernamelogin.style.transform = "translateY(0px)";
        usernamelogin.style.color = "grey";
    }
});
usernameRegister.addEventListener('focus', function(){
    usernameregister.style.transform = "translateY(-20px)";
    usernameregister.style.color = "white";
});
usernameRegister.addEventListener('blur', function(){
    if (usernameRegister.value !== ""){
        usernameregister.style.color = "grey";
    }
    else {
        usernameregister.style.transform = "translateY(0px)";
        usernameregister.style.color = "grey";
    }
});
passwordLogin.addEventListener('focus', function(){
    passwordlogin.style.transform = "translateY(-20px)";
    passwordlogin.style.color = "white";
});
passwordLogin.addEventListener('blur', function(){
    if (passwordLogin.value !== ""){
        passwordlogin.style.color = "grey";
    }
    else {
        passwordlogin.style.transform = "translateY(0px)";
        passwordlogin.style.color = "grey";
    }
});
passwordRegister.addEventListener('focus', function(){
    passwordregister.style.transform = "translateY(-20px)";
    passwordregister.style.color = "white";
});
passwordRegister.addEventListener('blur', function(){
    if (passwordRegister.value !== ""){
        passwordregister.style.color = "grey";
    }
    else {
        passwordregister.style.transform = "translateY(0px)";
        passwordregister.style.color = "grey";
    }
});
Email.addEventListener('focus', function(){
    email.style.transform = "translateY(-20px)";
    email.style.color = "white";
});
Email.addEventListener('blur', function(){
    if (Email.value !== ""){
        email.style.color = "grey";
    }
    else {
        email.style.transform = "translateY(0px)";
        email.style.color = "grey";
    }
});
phoneNumber.addEventListener('focus', function(){
    phonenumber.style.transform = "translateY(-20px)";
    phonenumber.style.color = "white";
});
phoneNumber.addEventListener('blur', function(){
    if (phoneNumber.value !== ""){
        phonenumber.style.color = "grey";
    }
    else {
        phonenumber.style.transform = "translateY(0px)";
        phonenumber.style.color = "grey";
    }
});
showLogin.addEventListener('click', function(){
    if (passwordLogin.value === ""){return}
    if (passwordLogin.type === "password"){
        passwordLogin.type = "text";
        hideLogin.style.display = "block";
        showLogin.style.display = "none";
    }
});
hideLogin.addEventListener('click', function(){
    if (passwordLogin.value === ""){return}
    if (passwordLogin.type === "text"){
        passwordLogin.type = "password";
        hideLogin.style.display = "none";
        showLogin.style.display = "block";
    }
});
showRegister.addEventListener('click', function(){
    if (passwordRegister.value === ""){return}
    if (passwordRegister.type === "password"){
        passwordRegister.type = "text";
        hideRegister.style.display = "block";
        showRegister.style.display = "none";
    }
});
hideRegister.addEventListener('click', function(){
    if (passwordRegister.value === ""){return}
    if (passwordRegister.type === "text"){
        passwordRegister.type = "password";
        hideRegister.style.display = "none";
        showRegister.style.display = "block";
    }
});

submitLogin.addEventListener('click', async function(e){
    e.preventDefault();
    const get_UsernameData = document.getElementById('usernameLogin').value;
    const get_PasswordData = document.getElementById('passwordLogin').value;
    if(get_PasswordData === "" || get_UsernameData === ""){
        alert('Please fill out your information!');
        return
    }
    const res = await fetch('https://weatherbackend-4565.onrender.com/LoginHandler', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": get_UsernameData,
            "password": get_PasswordData
        }),
    });
    const response_LoginData = await res.json();
    if (response_LoginData.status){
        alert(response_LoginData.message);
        console.log(response_LoginData);
        console.log('hello');
        localStorage.setItem("user", JSON.stringify({
            "name": response_LoginData.name,
            "email": response_LoginData.email,
            "telephone": response_LoginData.telephone
        }));
        document.getElementById('usernameLogin').value = "";
        document.getElementById('passwordLogin').value = "";
        usernamelogin.style.transform = "translateY(0px)";
        usernamelogin.style.color = "grey";
        passwordlogin.style.transform = "translateY(0px)";
        passwordlogin.style.color = "grey";
        window.location.href = "/Weather Forecast/weather.html";
    }
    else {
        alert(response_LoginData.message);
        document.getElementById('passwordLogin').value = "";
        passwordlogin.style.transform = "translateY(0px)";
        passwordlogin.style.color = "grey";
    }
});
function check_ValidPassword(password){
    const checkCondition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return checkCondition.test(password);
}
function check_ValidEmail(email){
    const checkCondition = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return checkCondition.test(email);
}
submitRegister.addEventListener('click', async function(e){
    e.preventDefault();
    const get_UsernameData = document.getElementById('usernameRegister').value;
    const get_PasswordData = document.getElementById('passwordRegister').value;
    const get_Email = document.getElementById('Email').value;
    const get_PhoneNumber = document.getElementById('phoneNumber').value;
    if(get_UsernameData === "" || get_PasswordData === "" || get_Email === "" || get_PhoneNumber === ""){
        alert('Please fill out your information!');
        return
    }
    if (!check_ValidPassword(get_PasswordData)){
        alert('Your password has to include:\n' +
            'At least 8 characters\n' +
            'Contains at least one uppercase letter\n' +
            'Contains at least one lowercase letter\n' +
            'Contains at least one number\n' +
            'Contains at least one special character'
        )
        return
    }
    if(!check_ValidEmail(get_Email)){
        alert('Your email is not valid!');
        return
    }
    const res = await fetch('https://weatherbackend-4565.onrender.com/RegisterHandler', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": get_UsernameData,
            "password": get_PasswordData,
            "email": get_Email,
            "phonenumber": get_PhoneNumber
        })
    })
    const response_RegisterData = await res.json();
        if(response_RegisterData.status){
            alert(response_RegisterData.message);
            usernameRegister.value = "";
            passwordRegister.value = "";
            Email.value = "";
            phoneNumber.value = "";
            usernameregister.style.transform = "translateY(0px)";
            usernameregister.style.color = "grey";
            passwordregister.style.transform = "translateY(0px)";
            passwordregister.style.color = "grey";
            email.style.transform = "translateY(0px)";
            email.style.color = "grey";
            phonenumber.style.transform = "translateY(0px)";
            phonenumber.style.color = "grey";
        }
        else{
            alert(response_RegisterData.message);
        }
});
switchFormButton.addEventListener('click', function(){
    const formLoginState = getComputedStyle(formLogin).opacity;
    const formRegisterState = getComputedStyle(formRegister).opacity;
    if (formLoginState === "1" || formRegisterState === "0"){
        formLogin.style.opacity = "0";
        formRegister.style.opacity = "1";
        formLogin.style.zIndex = "49";
        formRegister.style.zIndex = "50";
        formLogin.style.pointerEvents = "none";
        formRegister.style.pointerEvents = "auto";
        document.getElementById('usernameRegister').value = "";
        document.getElementById('passwordRegister').value = "";
        document.getElementById('Email').value = "";
        document.getElementById('phoneNumber').value = "";
        usernameregister.style.transform = "translateY(0px)";
        usernameregister.style.color = "grey";
        passwordregister.style.transform = "translateY(0px)";
        passwordregister.style.color = "grey";
        email.style.transform = "translateY(0px)";
        email.style.color = "grey";
        phonenumber.style.transform = "translateY(0px)";
        phonenumber.style.color = "grey";
        textSwitchForm.textContent = "You had an account?";
        switchFormButton.textContent = "Log in now"
    }
    else {
        formLogin.style.opacity = "1";
        formRegister.style.opacity = "0";
        formLogin.style.zIndex = "50";
        formRegister.style.zIndex = "49";
        formLogin.style.pointerEvents = "auto";
        formRegister.style.pointerEvents = "none";
        document.getElementById('usernameLogin').value = "";
        document.getElementById('passwordLogin').value = "";
        usernamelogin.style.transform = "translateY(0px)";
        usernamelogin.style.color = "grey";
        passwordlogin.style.transform = "translateY(0px)";
        passwordlogin.style.color = "grey";
        textSwitchForm.textContent = "You don't have an account?";
        switchFormButton.textContent = "Register now";
    }
});