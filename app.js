let users = []
let loggdins = {}
let page=window.location.href.split("/");
page=page
console.log(page)

function AllUsers(){
    let takeUser=localStorage.getItem("usersItem")
    let loggdin = localStorage.getItem("LoginItem")
    loggdins=JSON.parse(loggdin)||{}
    users=JSON.parse(takeUser)||[]

}
AllUsers()

let locationCheck = () => {
    let user = JSON.parse(localStorage.getItem("LoginItem"));
    if (user) {
        location.href = "./dashboard.html";
    }
}




function dashboard() {
    
    document.getElementById('name2').innerHTML ="Name :" + loggdins.userFirstName
    document.getElementById('dob2').innerHTML ="Date of birth :" + loggdins.dob
    document.getElementById('number2').innerHTML ="Mobile: " + loggdins.userEmail
}

const signup = () => {
    let fName = document.getElementById("firstName").value
    let surName = document.getElementById("surName").value
    let email = document.getElementById("number").value
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("cpassword").value
    let dob = document.getElementById("dob").value
    let error2 = document.getElementById('error2')
    let error = document.getElementById('error')

   
    
    if (password === cpassword) {
        let newUser = {
            userFirstName: fName,
            surName: surName,
            userEmail: email,
            userPass: password,
            userCpass: cpassword,
            dob:dob,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].userEmail === email) {
                error2.style.display = 'block'
                setTimeout(function () {
                    error2.style.display = 'none'
                }, 3000)
                return 0;
            }
        }
        users.push(newUser)

        localStorage.setItem("usersItem", JSON.stringify(users))
        window.location.href = "./sign-in.html"
    }
    else {
        error.style.display = 'block'
        setTimeout(function () {
            error.style.display = 'none'
        }, 3000)
    }
}

const login = () => {
    let LoginEmail = document.getElementById("num").value
    let Loginpass = document.getElementById("pass").value
    let error3 = document.getElementById('error3');
    console.log(LoginEmail)
    console.log(Loginpass)

    let isMatch = false

    for (let i = 0; i < users.length; i++) {

        if (users[i].userEmail == LoginEmail && users[i].userPass == Loginpass) {
            
                isMatch = true
                localStorage.setItem("LoginItem",JSON.stringify(users[i]))
                window.location.href="./dashboard.html";
            
        }

    }
    if (!isMatch) {
        error3.style.display = 'block'
    setTimeout(function () {
        error3.style.display = 'none'
    }, 3000)
        return 0;
    }
        
                
}

const logout=()=>{
    localStorage.removeItem("LoginItem")
    window.location.href="./sign-in.html"
}
