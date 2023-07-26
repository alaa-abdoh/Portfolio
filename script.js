function handleList(){
    let nav = document.querySelector("header .container nav");
    nav.style.top == "-100%" ? nav.style.top ="65px" :  nav.style.top = "-100% " 
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
    // sorrymsg.classList.remove("comeIn");  
    // sorrymsg.classList.add("goOut");   
}

// const sorryMessage = document.getElementById('sorryMessage');
// const demoButton = document.getElementById('special-demo');
// const btnRemove = document.getElementById('close');

// demoButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     sorryMessage.style.left="-300px"
// });
// btnRemove.addEventListener('click', function() {
//     sorryMessage.style.left="-5000px"
// });