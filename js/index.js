const firebaseURL = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const jsCourses = document.getElementById("courses")
const ID = getParamValue();
console.log(ID)
getCourseInfo(ID)





 

const signIn = document.getElementById("signIn").addEventListener('click',
    function(){
        document.querySelector('.container').style.display = 'block';
    }
);

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


    
    

  







function deconstruction(infoObj){
    console.log(infoObj);
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
    let userRow = document.createElement("a");
    userRow.classList.add("course")
    userRow.href = `./course-page.html?ID=${course.id}`
    userRow.innerHTML = `<img class="course-pic" src="${course.pic}">
    <div class="card">
    <p class="course-title">${course.title}</p>
    <p class="teacher">${course.Instructor}</p>
    <p>Certification: ${course.certification}</p>
    <p>Language: ${course.language}</p>
    <p class="price">$ ${course.price}</p>
     <button type="button">Buy Now</button>
    <p>Rate: ${course.rate}</p>
    </div>`
    return userRow
}





function getCourseInfo(){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                let courseObject =JSON.parse(this.responseText);
                Object.keys(courseObject).forEach(element => {
                    const course = deconstruction(courseObject[element])
                    jsCourses.appendChild(getCoursesValue(course))

                });

            }else{
                alert("Error while loading.");
            }

        }
    };
    request.open("GET", firebaseURL + `/kursevi.json`)
    request.send();

}


function getParamValue() {
    const location = decodeURI(window.location.toString());
    const index = location.indexOf("?") + 1;
    const substrings = location.substring(index, location.length);
    const splitedSubstring = substrings.split("=");
    return splitedSubstring[1]
}