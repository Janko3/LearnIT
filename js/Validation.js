const firebaseURLVal = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const jsUser = []
getUsers()

const validateMails = (emailInput) => {
    const mailRe = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'g');
    if(mailRe.test(emailInput)){
        return true
    }else{
        return false
    }
}

const validateUsername = (usernameInput) => {
    const usernameRe = new RegExp(/^[a-zA-Z0-9 ]+$/,'g');
    if(usernameRe.test(usernameInput)){
        return true
    }else{
        return false
    }
}

const validateString = (stringInput) => {
    const stringRe = new RegExp(/[a-z]|[A-Z]/,'g');
    if(stringRe.test(stringInput)){
        return true
    }else{
        return false
    }
}

const validateNumbers = (numberInput) => {
    const numberRe = new RegExp(/[\d\|]/,'g');
    if(numberRe.test(numberInput)){
        return true
    }else{
        return false
    }
}

const setError = (element,message) => {
    validation = false;

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const formName = document.querySelector('#registrationForm')
formName.addEventListener('submit',(e)=>{

        let sum = 0;
        e.preventDefault()
        const username = document.getElementById("username");
        const name = document.getElementById("name");
        const lastName = document.getElementById("lastName");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPass = document.getElementById("confirmPass");
        const phoneNume = document.getElementById("phoneNum");
        const adress = document.getElementById("adress");
        const birthday = document.getElementById("birthday");

        const usernameValue = username.value.trim();
        const nameValue = name.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPassValue = confirmPass.value.trim();
        const phoneNumValue = phoneNume.value.trim();
        const adressValue = adress.value.trim();
        const birthdayValue = birthday.value.trim();
        
        if(usernameValue === ''){
            setError(username,"This field is empty");
            username.style.border = "1px solid red";
        }else if(!(validateUsername(usernameValue))){
            setError(username,"Username is invalid");
            username.style.border = "1px solid red";
        }else{
            setSucess(username);
            sum += 1;
            
        }

        if(nameValue === ''){
            setError(name,"This field is empty");
            name.style.border = "1px solid red";
        }else if(!(validateString(nameValue))){
            setError(name,"Name is invalid");
            name.style.border = "1px solid red";

        }else{
            setSucess(name);
            sum += 1;

        }

        if(lastNameValue === ''){
            setError(lastName,"This field is empty");
            lastName.style.border = "1px solid red";
        }else if(!(validateString(lastNameValue))){
            setError(lastName,"Last name is invalid");
            lastName.style.border = "1px solid red";

        }else{
            setSucess(lastName);
            sum += 1;

        }

        if(emailValue === ''){
            console.log("test email");
            setError(email,"This field is empty");
            email.style.border = "1px solid red";
        }else if(!(validateMails(emailValue))){
            console.log("test1email");
            setError(email,"Email is invalid");
            email.style.border = "1px solid red";

        }else{
            setSucess(email);
            sum += 1;

        }

        if(passwordValue === ''){
            console.log("testPass");
            setError(password,"This field is empty");
            password.style.border = "1px solid red";
        }else if(!(validateUsername(passwordValue))){
            setError(password,"Password is invalid");
            password.style.border = "1px solid red";
        }else{
            setSucess(password);
            sum += 1;

        }

        if(confirmPassValue === ''){
            setError(confirmPass,"This field is empty");
            confirmPass.style.border = "1px solid red";
        }else if(passwordValue !== confirmPassValue){
            setError(confirmPass,"Passwords don't match");
            confirmPass.style.border = "1px solid red";
        }else{
            setSucess(confirmPass);
            sum += 1;

        }

        if(phoneNumValue === ''){
            setError(phoneNume,"This field is empty");
            phoneNume.style.border = "1px solid red";
        }else if(!(validateNumbers(phoneNumValue))){
            setError(phoneNume,"Phone number is invalid");
            phoneNume.style.border = "1px solid red";
        }else{
            setSucess(phoneNume);
            sum += 1;

        }
        if(adressValue === ''){
            setError(adress,"This field is empty");
            adress.style.border = "1px solid red";
        }else if(!(validateUsername(adressValue))){
            setError(adress,"Username is invalid");
            adress.style.border = "1px solid red";
        }else{
            setSucess(adress);
            sum += 1;
            
        }

        if(birthdayValue === ''){
            setError(birthday,"This field is empty");
            birthday.style.border = "1px solid red";
        }else if(!(validateNumbers(birthdayValue))){
            setError(birthday,"Username is invalid");
            birthday.style.border = "1px solid red";
        }else{
            setSucess(birthday);
            sum += 1;
            
        }
        
        if(sum === 9){
        alert("Register successful")
        document.querySelector('.register-con').style.display = 'none';
            
        }

    }
    
);



document.querySelector("#logForm").addEventListener('submit',
        (e)=>{
            e.preventDefault()
            var un = document.getElementById('email1').value;
            var pw = document.getElementById('password1').value;
            const foundUser = jsUser.find(user => user.email === un && user.lozinka === pw);

            if (foundUser) {
            alert('You are successfully logged in');
            document.querySelector('.container').style.display = 'none';

            } else {
            alert("Login was unsuccessful, please check your email and password");
            return false;
            }
                }
    );



    function getUsers(){
        let request = new XMLHttpRequest();
    
        request.onreadystatechange = function(){
            if (this.readyState == 4){
                if(this.status == 200){
                    let userObject =JSON.parse(this.responseText);
                    console.log(userObject);
                    Object.keys(userObject).forEach(element => {
                        jsUser.push(userObject[element]);
    
                    });
    
                }else{
                    alert("Error while loading.");
                }
    
            }
        };
        request.open("GET", firebaseURLVal + `/korisnici.json`)
        request.send();
    }
