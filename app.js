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

function dashboard() {
    
    document.getElementById('name2').innerHTML ="Name :" + loggdins.userFirstName
    document.getElementById('dob2').innerHTML ="Date of birth :" + loggdins.dob
    document.getElementById('number2').innerHTML ="Mobile: " + loggdins.userEmail
}

const signup = () => {
    console.log("users Entry:", users)
    let fName = document.getElementById("firstName").value
    let surName = document.getElementById("surName").value
    let email = document.getElementById("number").value
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("cpassword").value
    let dob = document.getElementById("dob").value

   
    
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
                alert("user already exist")
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
        alert("Your Information is incorrect!")
        return 0;
    }
        
                
}

const logout=()=>{
    localStorage.removeItem("LoginItem")
    window.location.href="./sign-in.html"
}