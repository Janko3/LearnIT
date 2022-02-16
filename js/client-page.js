// VARIABLES
const firebaseURL = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const ID = getParamValue();
const jsUser = document.querySelectorAll(".js-user");
const editUser = document.querySelector("#edit-btn");
console.log(ID);

// LISTENERS
redirectToClientEdit(ID);
getUserInfo(ID);


// FUNCTIONS
const deleteUser = document.querySelector('#delete-btn').addEventListener('click',
    function(){
        alert("Are you sure that you want to delete this user");
    }
)

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
        korisnickoIme: username,
        lozinka: password,
        email: email,
        ime: name,
        prezime: lastName,
        datumRodjenja: birthday,
        adresa: address,
        telefon: phoneNum



        

    }
    = infoObj
    return{username,password,email,name,lastName,birthday,address,phoneNum}
    
}



function redirectToClientEdit(ID){
    editUser.addEventListener('click', () => {
        editUser.setAttribute('href', editUser + `?id=${ID}`);
    });
}

function getUserInfo(ID){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                let userObject =JSON.parse(this.responseText);
                user = deconstruction(userObject)
                userValue = Object.values(user)
                jsUser.forEach((user,i) => user.innerHTML = userValue[i])

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

