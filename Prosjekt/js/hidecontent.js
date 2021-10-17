// // Henter ut de fire(åtte) klassene for de forskjellige gruppene av øvelser
// var koordinasjon = document.querySelectorAll(".koordinasjon")
// var topprykk = document.querySelectorAll(".topprykk")
// var spesifikk = document.querySelectorAll(".spesifikk")
// var lavarbeid = document.querySelectorAll(".lavarbeid")


// // Fire funksjoner for å skule hver av øvelsesfanene
// function hidetopprykk() { 
//     var i;
//     for (i = 0; i < topprykk.length; i++) {
//       topprykk[i].style.display = "none";
// }
// }

// function hidekoordinasjon() { 
//     var i;
//     for (i = 0; i < koordinasjon.length; i++) {
//       koordinasjon[i].style.display = "none";
// }
// }

// function hidespesifikk() { 
//     var i;
//     for (i = 0; i < spesifikk.length; i++) {
//       spesifikk[i].style.display = "none";
// }
// }

// function hidelavarbeid() { 
//     var i;
//     for (i = 0; i < lavarbeid.length; i++) {
//       lavarbeid[i].style.display = "none";
// }
// }



// // Fire funksjoner for å vise de ulike øvelsene
// function displaykoordinasjon() { 
//     var i;
//     for (i = 0; i < koordinasjon.length; i++) {
//       koordinasjon[i].style.display = "block";
// }
// }
// function displaytopprykk() { 
//     var i;
//     for (i = 0; i < topprykk.length; i++) {
//       topprykk[i].style.display = "block";
// }
// }
// function displayspesifikk() { 
//     var i;
//     for (i = 0; i < spesifikk.length; i++) {
//       spesifikk[i].style.display = "block";
// }
// }
// function displaylavarbeid() { 
//     var i;
//     for (i = 0; i < lavarbeid.length; i++) {
//       lavarbeid[i].style.display = "block";
// }
// }


// // Sette disse sammen for å vise én, og skjule alle andre, siden du ikke vet hvilken 
// // som vises før, så skjules alle andre enn den som vises
// function showlavarbeid() { 
//     hidetopprykk()
//     hidespesifikk()
//     displaylavarbeid()
//     hidekoordinasjon()
// }
// function showkoordinasjon() { 
//     hidetopprykk()
//     hidespesifikk()
//     hidelavarbeid()
//     displaykoordinasjon()
// }
// function showspesifikk() { 
//     hidetopprykk()
//     displayspesifikk()
//     hidelavarbeid()
//     hidekoordinasjon()
// }
// function showtopprykk() { 
//     displaytopprykk()
//     hidespesifikk()
//     hidelavarbeid()
//     hidekoordinasjon()
// }


var knapp;

var content;

function showkoordinasjon() { 
    knapp = document.querySelectorAll(".knapp")
    knapp[0].style.backgroundColor = "lightgrey"
    knapp[1].style.backgroundColor = "white"
    knapp[2].style.backgroundColor = "white"
    knapp[3].style.backgroundColor = "white"
    content = document.querySelectorAll(".øvelsercontent")
    content[0].style.display = "flex"
    content[0].style.flexDirection = "flex"
    content[1].style.display = "none"
    content[2].style.display = "none"
    content[3].style.display = "none"
}
function showtopprykk() { 
    knapp = document.querySelectorAll(".knapp")
    knapp[0].style.backgroundColor = "white"
    knapp[1].style.backgroundColor = "lightgrey"
    knapp[2].style.backgroundColor = "white"
    knapp[3].style.backgroundColor = "white"
    content = document.querySelectorAll(".øvelsercontent")
    content[1].style.display = "flex"
    content[1].style.flexDirection = "flex"
    content[0].style.display = "none"
    content[2].style.display = "none"
    content[3].style.display = "none"
}
function showspesifikk() { 
    knapp = document.querySelectorAll(".knapp")
    knapp[0].style.backgroundColor = "white"
    knapp[1].style.backgroundColor = "white"
    knapp[2].style.backgroundColor = "lightgrey"
    knapp[3].style.backgroundColor = "white"
    content = document.querySelectorAll(".øvelsercontent")
    content[2].style.display = "flex"
    content[2].style.flexDirection = "flex"
    content[1].style.display = "none"
    content[0].style.display = "none"
    content[3].style.display = "none"
}
function showlavarbeid() { 
    knapp = document.querySelectorAll(".knapp")
    knapp[0].style.backgroundColor = "white"
    knapp[1].style.backgroundColor = "white"
    knapp[2].style.backgroundColor = "white"
    knapp[3].style.backgroundColor = "lightgrey"
    content = document.querySelectorAll(".øvelsercontent")
    content[3].style.display = "flex"
    content[3].style.flexDirection = "flex"
    content[1].style.display = "none"
    content[2].style.display = "none"
    content[0].style.display = "none"
}