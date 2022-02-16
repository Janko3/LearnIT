const firebaseURL = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const ID = getParamValue();
const jsUsers = document.querySelector(".edit");
console.log("Ovo je",ID)

getUserInfo(ID)
const jsLoginShow = document.getElementById("login").addEventListener('click',
    function(){
        document.querySelector('.container').style.display = 'block';
    }
);

const jsLoginClose = document.getElementById("close").addEventListener('click',
    function(){
        document.querySelector('.container').style.display = 'none';
    }
);

const jsRegShow = document.getElementById('register').addEventListener('click',
    function(){
        document.querySelector('.register-con').style.display = 'block';
    }
);
const jsRegClose = document.getElementById("close1").addEventListener('click',
    function(){
        document.querySelector('.register-con').style.display = 'none';
    }
);
const validateMailsClient = (emailInput) => {
  const mailRe = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'g');
  if(mailRe.test(emailInput)){
      return true
  }else{
      return false
  }
}

const validateUsernameClient = (usernameInput) => {
  const usernameRe = new RegExp(/\d[\s\S]/,'g');
  if(usernameRe.test(usernameInput)){
      return true
  }else{
      return false
  }
}

const validateStringClient = (stringInput) => {
  const stringRe = new RegExp(/[a-z]|[A-Z]/,'g');
  if(stringRe.test(stringInput)){
      return true
  }else{
      return false
  }
}

const validateNumbersClient = (numberInput) => {
  const numberRe = new RegExp(/[\d]./,'g');
  if(numberRe.test(numberInput)){
      return true
  }else{
      return false
  }
}


const setErrorClient = (element,message) => {
  validation = false;

  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}
const setSucessClient = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

function deconstruction(infoObj){
    const{
        adresa: adress,
        datumRodjenja: birthday,
        email: email,
        ime: name,
        lozinka: password,
        prezime: lastName,
        telefon: phoneNum,
        korisnickoIme: username

    }
    = infoObj
    return{adress,birthday,email,name,password,lastName,phoneNum,username}

}

function getUsersValue(user){
    let userRow = document.createElement("a");
    userRow.classList.add("user")
    userRow.innerHTML = `  <h1>Edit Account</h1>

    <div class="text">Please fill in this form to edit your account.</div>
    <form id="clientEditForm" >
      <div class="data">
        <label>User Name</label>
        <input type="text" value="${user.username}" id="usernameClient" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Name</label>
        <input type="text" value="${user.name}" id="nameClient" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Last Name</label>
        <input type="text" value="${user.lastName}" id="lastNameClient" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Email</label>
        <input type="email" value="${user.email}" id="emailClient" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Password</label>
        <input type="password" value="${user.password}" id="passwordClient" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Confirm Password</label>
        <input type="password" id="passwordConfirmClient" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Phone Number</label>
        <input type="phone-num" value="${user.phoneNum}" id="phoneNumberClient" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Birthday</label>
        <input type="date" value="${user.birthday}" id="birthdayClient" >
        <div class="error"></div>
      </div>
      <button type="submit">Save Changes</button>

    </form>  `
    setTimeout(()=>{
      const formNameClient = document.querySelector('#clientEditForm');
      
      formNameClient.addEventListener('submit',(e)=>{
      let sumClient = 0;

      e.preventDefault();
      const usernameClient = document.getElementById("usernameClient");
      const nameClient = document.getElementById("nameClient");
      const lastNameClient = document.getElementById("lastNameClient");
      const emailClient = document.getElementById("emailClient");
      const passwordClient = document.getElementById("passwordClient");
      const passwordConfirmClient = document.getElementById("passwordConfirmClient");
      const phoneNumberClient = document.getElementById("phoneNumberClient");
      const birthdayClient = document.getElementById("birthdayClient");

      const  usernameClientValue =  usernameClient.value.trim();
      const nameClientValue = nameClient.value.trim();
      const lastNameClientValue = lastNameClient.value.trim();
      const emailClientValue = emailClient.value.trim();
      const passwordClientValue = passwordClient.value.trim();
      const passwordConfirmClientValue = passwordConfirmClient.value.trim();
      const phoneNumberClientValue = phoneNumberClient.value.trim();
      const birthdayClientValue = birthdayClient.value.trim();

      if(usernameClientValue === ''){
        setErrorClient(usernameClient,"This field is empty");
        usernameClient.style.border = "1px solid red";
      }else if(!(validateStringClient(usernameClientValue))){
        setErrorClient(usernameClient,"Invalid input");
        usernameClient.style.border = "1px solid red";
      }else{
        setSucessClient(usernameClient);
        sumClient++;
      }

      if(nameClientValue === ''){
        setErrorClient(nameClient,"This field is empty");
        nameClient.style.border = "1px solid red";
      }else if(!(validateStringClient(nameClientValue))){
        setErrorClient(nameClient,"Invalid input");
        nameClient.style.border = "1px solid red";
      }else{
        setSucessClient(nameClient);
        sumClient++;
      }

      if(lastNameClientValue === ''){
        setErrorClient(lastNameClient,"This field is empty");
        lastNameClient.style.border = "1px solid red";
      }else if(!(validateStringClient(lastNameClientValue))){
        setErrorClient(lastNameClient,"Invalid input");
        lastNameClient.style.border = "1px solid red";
      }else{
        setSucessClient(lastNameClient);
        sumClient++;
      }

      if(emailClientValue === ''){
        setErrorClient(emailClient,"This field is empty");
        emailClient.style.border = "1px solid red";
      }else if(!(validateMailsClient(emailClientValue))){
        setErrorClient(emailClient,"Invalid input");
        emailClient.style.border = "1px solid red";
      }else{
        setSucessClient(emailClient);
        sumClient++;
      }

      if( passwordClientValue === ''){
        setErrorClient(passwordClient,"This field is empty");
        passwordClient.style.border = "1px solid red";
      }else if(!(validateUsernameClient( passwordClientValue))){
        setErrorClient(passwordClient,"Invalid input");
        passwordClient.style.border = "1px solid red";
      }else{
        setSucessClient(passwordClient);
        sumClient++;
      }

      if(passwordClientValue !== passwordConfirmClientValue){
          setErrorClient(passwordConfirmClient,"Passwords don't match");
          passwordConfirmClient.style.border = "1px solid red";
      }else{
        setSucessClient(passwordConfirmClient);
        sumClient++;
      }

      if(phoneNumberClientValue === ''){
        setErrorClient(phoneNumberClient,"This field is empty");
        phoneNumberClient.style.border = "1px solid red";
      }else if(!(validateNumbersClient(phoneNumberClientValue))){
        setErrorClient(phoneNumberClient,"Invalid input");
        phoneNumberClient.style.border = "1px solid red";
      }else{
        setSucessClient(phoneNumberClient);
        sumClient++;
      }

      if(birthdayClientValue === ''){
        setErrorClient(birthdayClient,"This field is empty");
        birthdayClient.style.border = "1px solid red";
      }else if(!(validateNumbersClient(birthdayClientValue))){
        setErrorClient(birthdayClient,"Invalid input");
        birthdayClient.style.border = "1px solid red";
      }else{
        setSucessClient(birthdayClient);
        sumClient++;
      }

      if(sumClient === 8){
        alert("Changes saved");
      }

    });
  },1)
    return userRow
}

function getUserInfo(ID){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                let userObject =JSON.parse(this.responseText);
                    const user = deconstruction(userObject)
                  jsUsers.appendChild(getUsersValue(user));
            }else{
                alert("Error while loading.");
            }

        }
    };
    request.open("GET", firebaseURL + `/korisnici/${ID}.json`)
    request.send();

}

function getParamValue() {
    const location = decodeURI(window.location.toString());
    const index = location.indexOf("?") + 1;
    const substrings = location.substring(index, location.length);
    const splitedSubstring = substrings.split("=");
    return splitedSubstring[1]
}