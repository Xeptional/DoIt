
let setVisible = (id) => {
    let e = document.getElementById(id);
    let t = document.getElementById("intro");

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
