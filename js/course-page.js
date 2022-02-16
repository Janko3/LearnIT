const firebaseURL = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const ID = getParamValue();
const jsCourses = document.getElementById("course")
//console.log(ID)

getCourseInfo(ID)

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
    userRow.innerHTML = `<img class="course-pic1" src="${course.pic}" alt="java">
    <h1>${course.title}</h1>
    <h2>Instructor: ${course.Instructor}</h2>
    <p>ID: ${course.id}</p>
    <p>${course.about}</p>
    <p>Number of lections: ${course.numOfLections}</p>
    <p>Latest update: ${course.latestUpdate}</p>
    <p>Certification: ${course.certification}</p>
    <p>Category:${course.category}</p>
    <p>Language: ${course.language}</p>
    <p>CC: English, Serbian</p>
    <p>Attendies:${course.attendies}</p>
    <div class="rate1">
        <p>Rate: ${course.rate}</p>
        

        </div>
        <p class="price">$${course.price}</p>
        <a href="cart.html?ID=${course.id}"><button type="button">Buy</button></a>
        <a href="course-edit.html?ID=${course.id}"><button type="button">Edit</button></a>`
   
    return userRow
}

function getCourseInfo(ID){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                let courseObject =JSON.parse(this.responseText);
                console.log(courseObject)
                
                
                    const course = deconstruction(courseObject)
                   //   const courseValue = Object.values(course)
                    
                    jsCourses.appendChild(getCoursesValue(course))
                    

                    
                
                
                
               // jsCourse.forEach((course,i) => course.innerHTML = courseValue[i])

                
                
            }else{
                alert("Error while loading.");
            }

        }
    };
    request.open("GET", firebaseURL + `/kursevi/${ID}.json`)
    request.send();

}

function getParamValue() {
    const location = decodeURI(window.location.toString());
    const index = location.indexOf("?") + 1;
    const substrings = location.substring(index, location.length);
    const splitedSubstring = substrings.split("=");
    return splitedSubstring[1]
}
