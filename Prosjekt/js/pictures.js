


//function to make the pop-window show
function visible() {
    //let athlete = x //Hver atlet har en tekst hver
    let pop = document.querySelector('.pop').style.display="flex";
}


//function to hide pop-window
function hidden() {
    document.querySelector('.pop').style.display="none";
}

//close window
let closeButton = document.getElementById('close');
closeButton.addEventListener('click', (event) => {
    hidden()
})



//commenting out pop-up for trainser incase client wants to set in text later.
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




//calling athlete 1
let callAthlete1 = document.getElementsByClassName('athlete1');
let callAthlete1Text = document.getElementById('athlete1_text');
//event to both image and name
for (let i=0; i< callAthlete1.length; i++) {
    callAthlete1[i].addEventListener('click', (event) => {
        visible();
        callAthlete1Text.style.display = "block";

    //makes text disappear again
    closeButton.addEventListener('click', (event)=> {
        callAthlete1Text.style.display = "none";
    })
    }, false)
}

//calling athlete 2
let callAthlete2 = document.getElementsByClassName('athlete2');
let callAthlete2Text = document.getElementById('athlete2_text');
for (let i=0; i< callAthlete2.length; i++) {
    callAthlete2[i].addEventListener('click', (event) => {
        visible();
        callAthlete2Text.style.display = "block";

    //makes text disappear again
    closeButton.addEventListener('click', (event)=> {
        callAthlete2Text.style.display = "none";
    })
    }, false)
}

//calling athlete 3
let callAthlete3 = document.getElementsByClassName('athlete3');
let callAthlete3Text = document.getElementById('athlete3_text');
for (let i=0; i< callAthlete3.length; i++) {
    callAthlete3[i].addEventListener('click', (event) => {
        visible();
        callAthlete3Text.style.display = "block";

    //makes text disappear again
    closeButton.addEventListener('click', (event)=> {
        callAthlete3Text.style.display = "none";
    })
    }, false)
}

//calling athlete 4
let callAthlete4 = document.getElementsByClassName('athlete4');
let callAthlete4Text = document.getElementById('athlete4_text');
for (let i=0; i< callAthlete4.length; i++) {
    callAthlete4[i].addEventListener('click', (event) => {
        visible();
        callAthlete4Text.style.display = "block";

    //makes text disappear again
    closeButton.addEventListener('click', (event)=> {
        callAthlete4Text.style.display = "none";
    })
    }, false)
}


