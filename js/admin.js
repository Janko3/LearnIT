// VARIABLES


const firebaseURL = "https://learnit-66ca7-default-rtdb.firebaseio.com/";
const tBody = document.querySelector('.js-all-users');


// LISTENERS AND CALLS

getAllUsers();
attachRows();


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

// FUNCTIONS

function attachRows() {
    setTimeout(() => {
        let rows = document.querySelectorAll('tr');
        rows.forEach((row, i) => {
            if (i !== 0) {
                row.addEventListener('click',() => {
                    window.location.href = `./client-page.html?id=${row.getAttribute('data-id')}`;
                });
            }
        })
    }, 1000);
}


const separateObjectToArray = (object) => {
    const newArray = [];
    const keys = Object.keys(object);
    keys.forEach((key) => {
        newArray.push(object[key]);
    });
    return newArray
};

function getAllUsers(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState == 4){
            if(this.status == 200){
                removeTableRows();
                const mainObj = JSON.parse(this.responseText);
                usersArray = separateObjectToArray(mainObj);
                usersArray.forEach(user => {
                    tBody.appendChild(appendUserRow(user));
                });        
            }else{
                alert("Error while loading.");
            }

        }
    };
    request.open("GET", firebaseURL + "/korisnici.json")
    request.send();

}
 
function appendUserRow(user){
    let userRow = document.createElement("tr");
    userRow.setAttribute('data-id', user.id);
    let usernameTd = document.createElement("td");
    usernameTd.innerText = user["korisnickoIme"];
    userRow.appendChild(usernameTd);

    let passwordTd = document.createElement("td");
    passwordTd.innerText = user["lozinka"];
    userRow.appendChild(passwordTd);

    let emailTd = document.createElement("td");
    emailTd.innerText = user["email"];
    userRow.appendChild(emailTd);

    let nameTd = document.createElement("td");
    nameTd.innerText = user["ime"];
    userRow.appendChild(nameTd);

    let lastnameTd = document.createElement("td");
    lastnameTd.innerText = user["prezime"];
    userRow.appendChild(lastnameTd);

    let birthdayTd = document.createElement("td");
    birthdayTd.innerText = user["datumRodjenja"];
    userRow.appendChild(birthdayTd);

    let addressTd = document.createElement("td");
    addressTd.innerText = user["adresa"];
    userRow.appendChild(addressTd);

    let phoneNumTd = document.createElement("td");
    phoneNumTd.innerText = user["telefon"];
    userRow.appendChild(phoneNumTd);

    return userRow;
}

function removeTableRows() {
    tBody.innerHTML = '';
}