const firebaseURL = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const ID = getParamValue();
const jsCourses = document.getElementById("cart")

console.log("Ovo je",ID)

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
    userRow.classList.add("course");
    userRow.innerHTML = `<h1>Shopping cart</h1>
    <div class="cart">
    <div class="products">
        <div class="product">
            <img src="${course.pic}">
            <div class="product-info">
                <h3 class="product-name">${course.title}</h3>
                <h2 class="product-price">${course.price}</h2>
                <p class="product-quantity">Qnt: <input value="1" name="">
                    <p class="product-remove">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        <span class="remove">Remove</span>
                    </p>
            </div>

        </div>
    </div>
</div>
<div class="cart-total">
    <p>
        <span>Total Price</span>
        <span class="product-price">${course.price}</span>
    </p>
    <p>
        <span>Number of Courses</span>
        <span>1</span>
    </p>
    <a href="#">Proceed to Checkout</a>
</div>`
    return userRow
}

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

function getParamValue() {
    const location = decodeURI(window.location.toString());
    const index = location.indexOf("?") + 1;
    const substrings = location.substring(index, location.length);
    const splitedSubstring = substrings.split("=");
    return splitedSubstring[1]
}