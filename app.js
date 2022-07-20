let users = []
let page=window.location.href.split("/");
page=page
console.log(page)

function AllUsers(){
    let takeUser=localStorage.getItem("usersItem")
    users=JSON.parse(takeUser)||[]
}
AllUsers()

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
        alert("Password Dont Match")
    }
}

const login = () => {
    let LoginEmail = document.getElementById("num").value
    let Loginpass = document.getElementById("pass").value
    console.log(LoginEmail)
    console.log(Loginpass)

    let isMatch = false

    for (let i = 0; i < users.length; i++) {

        if (users[i].userEmail === LoginEmail && users[i].userPass === Loginpass) {
            
                isMatch = true
                localStorage.setItem("LoginItem",JSON.stringify(users[i].userFirstName))
                window.location.href="./dashboard.html";
            
        }

                let Email = users[i].userEmail;
                let name = users[i].userFirstName + users[i].surName
                let date = users[i].dob

    }
    if (!isMatch) {
        alert("Your Information is incorrect!")
    }
        
                
}

const logout=()=>{
    localStorage.removeItem("LoginItem")
    window.location.href="./sign-in.html"
}