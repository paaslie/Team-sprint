


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

//function to get the id for the athlete
function athleteId(athleteNr) {
    let athlete = document.getElementById('athleteNr');
}

//function to get the text about the athlete
function athleteText(athlete_text) {
    let athlete = document.getElementsByName('athlete_text');
    athlete.style.display = "flex";
}

// Virker ikke enda!! fiks

// calling trainer
athleteId(trainer).addEventListener('click', (event) => {
    visible();
    athleteText(trainer_text);
})

//calling athlete 1
athleteId(athlete1).addEventListener('click', (event) => {
    visible();
    athleteText(athlete1_text);
})

//calling athlete 2
athleteId(athlete2).addEventListener('click', (event) => {
    visible();
    athleteText(athlete2_text);
})

//calling athlete 3
athleteId(athlete3).addEventListener('click', (event) => {
    visible();
    athleteText(athlete3_text);
})

//calling athlete 4
athleteId(athlete4).addEventListener('click', (event) => {
    visible();
    athleteText(athlete4_text);
})