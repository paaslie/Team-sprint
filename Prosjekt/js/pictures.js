


//function to make the pop-window show
function visible() {
    //let athlete = x //Hver atlet har en tekst hver
    document.querySelector('.pop').style.display="flex";
}


//function to hide pop-window
function hidden() {
    document.querySelector('.pop').style.display="none";
}

//close window
let close = document.getElementById('close');
close.addEventListener('click', (event) => {
    hidden()
    
})


// calling trainer
let callTrainer = document.getElementById('trainer');
let callTrainerText = document.getElementById('trainer_text');
callTrainer.addEventListener('click', (event) => {
    visible();
    callTrainerText.style.display = "flex";
})



//calling athlete 1
let callAthlete1 = document.getElementById('athlete1');
let callAthlete1Text = document.getElementById('athlete1_text');
callAthlete1.addEventListener('click', (event) => {
    visible();
    callAthlete1Text.style.display = "flex";
})

//calling athlete 2
let callAthlete2 = document.getElementById('athlete2');
let callAthlete2Text = document.getElementById('athlete2_text');
callAthlete2.addEventListener('click', (event) => {
    visible();
    callAthlete2Text.style.display = "flex";
})

//calling athlete 3
let callAthlete3 = document.getElementById('athlete3');
let callAthlete3Text = document.getElementById('athlete3_text');
callAthlete3.addEventListener('click', (event) => {
    visible();
    callAthlete3Text.style.display = "flex";
})

//calling athlete 4
let callAthlete4 = document.getElementById('athlete4');
let callAthlete4Text = document.getElementById('athlete4_text');
callAthlete4.addEventListener('click', (event) => {
    visible();
    callAthlete4Text.style.display = "flex";
})

