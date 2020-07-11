
function setVisible(id) {
    let e = document.getElementById(id);
    let t = document.getElementById("intro");

    if(!e.style.display) {
        e.style.display = "none";
    }

    if(e.style.display === "none") {
        t.style.display = "none";
        e.style.display = "block";
    }
    else {
        e.style.display = "none";
    }    
}

//let l = document.getElementById("logbtn");
//l.onclick = setVisible(loginForm);


function displayDate() {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();   

    let ymd =  m + "/" + d + "/" + y;
    return ymd;
}

let dateHold = document.getElementById("date");
dateHold.textContent = displayDate();


function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm () {
    var fname = document.signForm.fname.value;
    var lname = document.signForm.lname.value;
    var email = document.signForm.email.value;
    var suname = document.signForm.suname.value;
    var spwd = document.signForm.spwd.value;
    var scpwd = document.signForm.scpwd.value;

    //defining error variables with default values
    var fnameErr = lnameErr = emailErr = sunameErr = spwdErr = scpwdErr = true;

    //validate first name
    if(fname == "") {
        printError("fnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(fname) === false) {
            printError("fnameErr", "Please enter a valid name");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
        }
    }

    //validate last name
    if(lname == "") {
        printError("lnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid name");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        } 
    }

    //validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        //regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //validate username
    if(suname == "") {
        printError("sunameErr", "Please enter a username");
    } else {
        var regex = /^[a-zA-Z0-9]+$/i;
        if(regex.test(suname) === false) {
            printError("sunameErr", "Please enter a valid username");
        } else {
            printError("sunameErr", "");
            sunameErr = false;
        }
    }

    //validate passwords 
    if(spwd == "") {
        printError("spwdErr", "Please enter a password");
    } else if(scpwd == "") {
        printError("scpwdErr", "Plwase enter your password again");
    } else {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if(regex.test(spwd) === false) {
            printError("spwdErr", "The password you entered does not match the required format. Please try again");
        } else if(!spwd === scpwd) {
            printError("scpwdErr", "This does not match the entered password. Please try again");
        } else {
            printError("spwdErr", "");
            printError("scpwdErr", "");
            spwdErr = false;
            scpwdErr = false;
        }
    }

    if((fnameErr || lnameErr || emailErr || sunameErr || spwdErr || scpwdErr) == true) {
        return false;
    }

}



