function handleList(){
    let nav = document.querySelector("header .container nav");
    nav.style.top == "-1000px" ? nav.style.top ="65px" :  nav.style.top = "-1000px" 
}


function disableSpecialDemo(event){
    event.preventDefault()
    console.log(event)
    let sorrymsg = document.getElementById("sorryMessage");
    sorrymsg.classList.toggle("comeIn");   
    sorrymsg.classList.toggle("goOut")
}

function closeSorryMsg(event){
    event.stoppropagation();
    let sorrymsg = document.getElementById("sorryMessage");
    sorrymsg.classList.toggle("comeIn")
    sorrymsg.classList.toggle("goOut")
}

function changeMode(){
    document.body.classList.toggle("darkMode")
    if(document.body.classList.contains("darkMode"))
        window.localStorage.dark = "true";
        else window.localStorage.dark = "false";
}

window.addEventListener('load', function() {
    checkStorage();
  });

function checkStorage(){
    let status = window.localStorage.dark;
    if(status == "true")
    document.body.classList.add("darkMode")
}  