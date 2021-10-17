const header = ' <header id="headerAll"><ul class="navbar"><li><a id="logo" href="index.html"><img src="img/logo_white_long.png" width="270px"/></a></li><li><a href="about.html">OM OSS</a></li><li class="dropdown"><a href="javascript:void(0)" class="btnDrop">TRENINGSFILOSOFI</a><div class="dropdownContent"><a href="trainingprogram.html">Treningsprogram</a><a href="exercises.html">Øvelser</a><a href="sprinttechnique.html">Sprintteknikk</a></div></li><li><a href="results.html">RESULTATER</a></li><li><a href="sponsors.html">VÅRE SPONSORER</a></li></ul></header>';
const footer = ' <footer id="footerAll"><div class="footer-flex-container"><div class="footer-item"><p><b>Kontakt oss:</b></p><p>E-post: mail@teamsprint.no</p><p>Tlf.: +47 90926315</p></div><div class="footer-item"><p><b><i>Ønsker du å støtte team Sprint?</i></b></p><p>Kontakt oss gjerne på mail eller telefon.</p></div><div class="footer-item"><a href="https://www.instagram.com/team_sprint/" target="_blank"><p><img src="img/insta_logo.png" width="18px" alt="instagram logo">&ensp;@team_sprint</p></a><a href="https://www.facebook.com/teamsprintskoyter/" target="_blank"><p><img src="img/facebook_logo.png" width="18px" alt="facebook logo">&ensp;@teamsprintskoyter</p></a></div></div></footer>';
//to strings med alt innhold i headeren og footeren. 
//Gjør det på denne måten for å kunne benytte innerHTML senere for å sette inn header og footer på alle sidene i tabellen under.

const pages = ["Homepage", "About", "Trainingprogram", "Exercises", "Sprinttechnique", "Results",  "Sponsors"];

function includeHeaderAndfooter() {
  //går gjennom alle sidene i tabellen "pages"
  for (let i = 0; i<pages.length; i++) {
    //definerer variabler for sidens header og footer ved å referere til header- og footer IDen til siden. 
    let headername = document.getElementById("header"+pages[i]);
    let footername = document.getElementById("footer"+pages[i]);
    
    //sjekker at headername og footername ikke er lik null, hvis ikke settes headeren og footer inn i sidens html-dokument.
    if (headername != null && footername != null) {
      headername.innerHTML = header;
      footername.innerHTML = footer;
    }
  }
}

includeHeaderAndfooter();   //kjører funksjonen 

//var current = location.href;    skal kanskje brukes senere til å markere hvilken side man befinner seg på 

