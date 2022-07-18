let users = []


function getAllUsers() {
    let userInStringForm = localStorage.getItem("users");
    users = JSON.parse(userInStringForm) || [];
    console.log(users);
}
getAllUsers();


function add() {
    let name = document.getElementById('firstName').value;
    let surName = document.getElementById('surName').value;
    let number = document.getElementById('number').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('month').value + " / " + document.getElementById('date').value + " / " + document.getElementById('year').value;
    let gender = document.getElementsByName('gender');
    localStorage.JSON.parse(users);

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender = gender[i];
        }
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].number !== number) {
            let newUser =

            {

                name: name,
                surname: surName,
                number: number,
                password: password,
                dob: dob,
                gender: gender,

            }

            users.push(newUser)
            localStorage.setItem("users", JSON.stringify(users))

        }








        else {

            alert("this number is already taken");
        }

    }
}
// localStorage.removeItem("loggedInUser");

function move() {

    let pass = document.getElementById('pass').value;
    let num = document.getElementById('num').value;
    localStorage.getItem("users", JSON.parse(users))


    for (let i = 0; i < users.length; i++) {


        if (users[i].number === num && users[i].password === pass) {

            localStorage.setItem(`logged-in}`, JSON.stringify(users[i].name))
            window.location.href = "./dashboard.html";
            localStorage.getItem('user', JSON.parse())
            document.getElementById('details').innerHTML = users[i]

        }

        else {
            alert("Enter correct number or password")
        }

    }
}