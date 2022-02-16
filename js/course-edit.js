const firebaseURL = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const ID = getParamValue();
const jsCourses = document.getElementById("edit1")

console.log("Ovo je",ID)

getCourseInfo(ID)

function getCourseInfo(ID){
  let request = new XMLHttpRequest();

  request.onreadystatechange = function(){
      if (this.readyState == 4){
          if(this.status == 200){
              let courseObject =JSON.parse(this.responseText);
              console.log(this.responseText);

                  const course = deconstruction(courseObject)

                  jsCourses.appendChild(getCoursesValue(course))
                  
          }else{
              alert("Error while loading.");
          }

      }
  };
  request.open("GET", firebaseURL + `/kursevi/${ID}.json`)
  request.send();

}

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

const validateMails1 = (emailInput) => {
  const mailRe = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'g');
  if(mailRe.test(emailInput)){
      return true
  }else{
      return false
  }
}

const validateUsername1 = (usernameInput) => {
  const usernameRe = new RegExp(/([A-Z])\w+[\s\S]/,'g');
  if(usernameRe.test(usernameInput)){
      return true
  }else{
      return false
  }
}

const validateString1 = (stringInput) => {
  const stringRe = new RegExp(/[a-z]|[A-Z]/,'g');
  if(stringRe.test(stringInput)){
      return true
  }else{
      return false
  }
}

const validateNumbers1 = (numberInput) => {
  const numberRe = new RegExp(/[\d]/,'g');
  if(numberRe.test(numberInput)){
      return true
  }else{
      return false
  }
}


const setError1 = (element,message) => {
  validation = false;

  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}
const setSucess1 = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}



function deconstruction(infoObj){
    const{
        slika: pic,
        naziv: title,
        autor: Instructor,
        id: id,
        opis: about,
        brojLekcija: numOfLections,
        datumIzmene: latestUpdate,
        sertifikovan: certification,
        kategorija: category,
        jezik: language,
        brojKorisnika: attendies,
        prosecnaOcena: rate,
        cena: price


    }
    = infoObj
    return{pic,title,Instructor,id,about,numOfLections,latestUpdate,certification,category,language,attendies,rate,price}
}

function getCoursesValue(course){
    let userRow = document.createElement("div");
    userRow.classList.add("course")
    userRow.innerHTML = ` <h1>Edit Course</h1>
    <div class="text">Please fill in this form to edit course.</div>
    <form id="courseEditForm1" >
      <div class="data">
        <label>Course Name</label>
        <input id="title1" type="text" value="${course.title}" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Instructor</label>
        <input id="inst1" type="text" value="${course.Instructor}" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>ID</label>
        <input id="id1" type="number" value="${course.id}"  disabled>
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Number of lectures</label>
        <input id="num1" type="number" value="${course.numOfLections}" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Latest update</label>
        <input id="update1" type="datetime" value="${course.latestUpdate}" >
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Language</label>
        <input id="language1" type="text" value="${course.language}" >
        <div  class="error"></div>
      </div>
      <div class="data">
        <label>Category</label>
        <input  id="category1" type="text" value="${course.category}" >
        <div class="error"></div>
      </div>
     
      <div class="data">
        <label>People attended this course</label>
        <input id="attendies1" type="number" value="${course.attendies}"  disabled>
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Rate</label>
        <input id="rate1" type="number" value="${course.rate}"  disabled>
        <div class="error"></div>
      </div>
      <div class="data">
        <label>Price</label>
        <input id="price1" type="number" value="${course.price}"  disabled>
        <div class="error"></div>
      </div>
      <div class="data-crt">
        <label>Certifated</label>
        <br>
        <input id="cert1" type="radio" name="certification"/> Yes
      </div>
      <div class="data">
        <label>About</label>
        <textarea id="about1" cols="30" rows = "5">${course.about}</textarea>
        <div class="error"></div>
        

      </div>

      <button type="submit">Save Changes</button>

  `
  setTimeout(()=>{
    const formName1 = document.querySelector('#courseEditForm1');
    
    formName1.addEventListener('submit',(e)=>{
    let sum = 0;

    e.preventDefault()
    const title1 = document.getElementById("title1");
    const inst1 = document.getElementById("inst1");
    const num1 = document.getElementById("num1");
    const update1 = document.getElementById("update1");
    const language1 = document.getElementById("language1");
    const category1 = document.getElementById("category1");
    const cert1 = document.getElementById("cert1");
    const about1 = document.getElementById("about1");

    const title1Value = title1.value.trim();
    const inst1Value = inst1.value.trim();
    const num1Value = num1.value.trim();
    const update1Value = update1.value.trim();
    const language1Value = language1.value.trim();
    const category1Value = category1.value.trim();
    const attendies1Value = attendies1.value.trim();
    const cert1Value = cert1.value.trim();
    const about1Value = about1.value.trim();

    if(title1Value === ''){
      setError1(title1,"This field is empty");
      title1.style.border ="1px solid red";

    }else if(!(validateUsername1(title1Value))){
      setError1(title1,"Invalid input");
      title1.style.border ="1px solid red";

    }else{
      setSucess1(title1);
      sum++;
    }

    if(inst1Value === ''){
      setError1(inst1,"This field is empty");
      inst1.style.border ="1px solid red";

    }else if(!(validateString1(inst1Value))){
      setError1(inst1,"Invalid input");
      inst1.style.border ="1px solid red";

    }else{
      setSucess1(inst1);
      sum++;
    }

    if(num1Value === ''){
      setError1(num1,"This field is empty");
      num1.style.border ="1px solid red";

    }else if(!(validateNumbers1(num1Value))){
      setError1(num1,"Invalid input");
      num1.style.border ="1px solid red";

    }else{
      setSucess1(num1);
      sum++;
    }

    if(update1Value === ''){
      setError1(update1,"This field is empty");
      update1.style.border ="1px solid red";

    }else if(!(validateNumbers1(update1Value))){
      setError1(update1,"Invalid input");
      update1.style.border ="1px solid red";

    }else{
      setSucess1(update1);
      sum++;
    }
    if(language1Value === ''){
      setError1(language1,"This field is empty");
      language1.style.border ="1px solid red";

    }else if(!(validateString1(language1Value))){
      setError1(language1,"Invalid input");
      language1.style.border ="1px solid red";

    }else{
      setSucess1(language1);
      sum++;
    }

    if(category1Value === ''){
      setError1(category1,"This field is empty");
      category1.style.border ="1px solid red";

    }else if(!(validateString1(category1Value))){
      setError1(category1,"Invalid input");
      category1.style.border ="1px solid red";

    }else{
      setSucess1(category1);
      sum++;
    }

    if(attendies1Value === ''){
      setError1(attendies1,"This field is empty");
      attendies1.style.border ="1px solid red";

    }else if(!(validateNumbers1(attendies1Value))){
      setError1(attendies1,"Invalid input");
      attendies1.style.border ="1px solid red";

    }else{
      setSucess1(attendies1);
      sum++;
    }

    if(about1Value === ''){      
      setError1(about1,"This field is empty");
      about1.style.border ="1px solid red";

    }else if(!(validateString1(about1Value))){     
      setError1(about1,"Invalid input");
      about1.style.border ="1px solid red";

    }else{     
      setSucess1(about1);
      sum++;
    }

    if(sum === 8){
      alert("Changes saved");
    }
  
  });
}
 ,1)
    return userRow
}



function getParamValue() {
    const location = decodeURI(window.location.toString());
    const index = location.indexOf("?") + 1;
    const substrings = location.substring(index, location.length);
    const splitedSubstring = substrings.split("=");
    return splitedSubstring[1]
}

    