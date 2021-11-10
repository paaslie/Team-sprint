


//Funskjon for å gjøre pop-up synlig
function visible() {
    let pop = document.querySelector('.pop').style.display="block";
}


//funksjon for å skjule pop-up
function hidden() {
    document.querySelector('.pop').style.display="none";
}

//lukker pop-up
let closeButton = document.getElementById('close');
closeButton.addEventListener('click', (event) => {
    hidden()
})



//kommenterer ut pop-up for treneren tilfelle klienten vil sette inn tekst senere
/**
// calling trainer
let callTrainer = document.getElementsByClassName('trainer');
let callTrainerText = document.getElementById('trainer_text');
for (let i=0; i< callTrainer.length; i++) {
    callTrainer[i].addEventListener('click', (event) => {
        visible();
        callTrainerText.style.display = "block";
        //makes text disappear again
    closeButton.addEventListener('click', (event)=> {
        callTrainerText.style.display = "none";
    })
    }, false)
}

**/




//kaller på atlet 1
let callAthlete1 = document.getElementsByClassName('athlete1');
let callAthlete1Text = document.getElementById('athlete1_text');
//event for å synliggjøre teksten om atlet 1
for (let i=0; i< callAthlete1.length; i++) {
    callAthlete1[i].addEventListener('click', (event) => {
        visible();
        callAthlete1Text.style.display = "block";

    //skjuler teksten om atlet 1
    closeButton.addEventListener('click', (event)=> {
        callAthlete1Text.style.display = "none";
    })
    }, false)
}

//kaller på atlet 2
let callAthlete2 = document.getElementsByClassName('athlete2');
let callAthlete2Text = document.getElementById('athlete2_text');
//event for å synliggjøre teksten om atlet 2
for (let i=0; i< callAthlete2.length; i++) {
    callAthlete2[i].addEventListener('click', (event) => {
        visible();
        callAthlete2Text.style.display = "block";

    //skjuler teksten om atlet 2
    closeButton.addEventListener('click', (event)=> {
        callAthlete2Text.style.display = "none";
    })
    }, false)
}

//kaller på atlet 3
let callAthlete3 = document.getElementsByClassName('athlete3');
let callAthlete3Text = document.getElementById('athlete3_text');
//event for å synliggjøre teksten om atlet 3
for (let i=0; i< callAthlete3.length; i++) {
    callAthlete3[i].addEventListener('click', (event) => {
        visible();
        callAthlete3Text.style.display = "block";

    //skjuler teksten om atlet 3
    closeButton.addEventListener('click', (event)=> {
        callAthlete3Text.style.display = "none";
    })
    }, false)
}

//kaller på atlet 4
let callAthlete4 = document.getElementsByClassName('athlete4');
let callAthlete4Text = document.getElementById('athlete4_text');
//event for å synliggjøre teksten om atlet 4
for (let i=0; i< callAthlete4.length; i++) {
    callAthlete4[i].addEventListener('click', (event) => {
        visible();
        callAthlete4Text.style.display = "block";

    //skjuler teksten om atlet 4
    closeButton.addEventListener('click', (event)=> {
        callAthlete4Text.style.display = "none";
    })
    }, false)
}


