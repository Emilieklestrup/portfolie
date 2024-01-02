window.addEventListener("load", showTitle);

let point;
let liv;
function showTitle() {
  console.log("showTitle");
  hideAllScreens();

  document.querySelector("#start").classList.remove("hide");

  document.querySelector("#play_botton").addEventListener("click", startGame);

  const bombe_snd = document.querySelector("#bombe");
  const ren_snd = document.querySelector("#ren");
  const beskidt_snd = document.querySelector("#beskidt");
}
function startGame() {
  console.log("startGame");

  hideAllScreens();

  //start bg lyd

  // nulstil liv og point (sæt til startværdien)
  point = 0;
  liv = 3;

  //opdater point og liv på siden
  document.querySelector("#mine_point").textContent = point;
  document.querySelector("#mine_liv").textContent = liv;

  //Udskriv i konsollen: Tiden er startet
  console.log("Tiden er startet");

  //Starter timeren (ur-animationen)
  document.querySelector("#minut_viser").classList.add("minut_animation");
  document.querySelector("#time_viser").classList.add("time_animation");

  //Når animationen er færdig kaldes funktionen endGame()
  document
    .querySelector("#minut_viser")
    .addEventListener("animationend", endGame);

  //starte animationerne på bombe
  document.querySelector("#bombe_contanier1").classList.add("fald");

  let rnd = generateRandomNumber(6);
  document.querySelector("#bombe_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document.querySelector("#bombe_contanier1").classList.add("speed" + rnd);

  rnd = generateRandomNumber(4);
  document.querySelector("#bombe_contanier1").classList.add("delay" + rnd);

  //starte animationerne på rent tøj
  document.querySelector("#ren_tee_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document.querySelector("#ren_tee_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document.querySelector("#ren_tee_contanier1").classList.add("speed" + rnd);

  rnd = generateRandomNumber(4);
  document.querySelector("#ren_tee_contanier1").classList.add("delay" + rnd);

  // ren bukser element
  document.querySelector("#ren_bukser_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document.querySelector("#ren_bukser_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document.querySelector("#ren_bukser_contanier1").classList.add("speed" + rnd);

  rnd = generateRandomNumber(4);
  document.querySelector("#ren_bukser_contanier1").classList.add("delay" + rnd);

  //ren kjole
  document.querySelector("#ren_kjole_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document.querySelector("#ren_kjole_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document.querySelector("#ren_kjole_contanier1").classList.add("speed" + rnd);

  rnd = generateRandomNumber(4);
  document.querySelector("#ren_kjole_contanier1").classList.add("delay" + rnd);

  //ren sokker
  document.querySelector("#ren_sokker_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document.querySelector("#ren_sokker_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document.querySelector("#ren_sokker_contanier1").classList.add("speed" + rnd);

  rnd = generateRandomNumber(4);
  document.querySelector("#ren_sokker_contanier1").classList.add("delay" + rnd);

  // rent langærmet
  document.querySelector("#ren_lang_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document.querySelector("#ren_lang_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document.querySelector("#ren_lang_contanier1").classList.add("speed" + rnd);

  rnd = generateRandomNumber(4);
  document.querySelector("#ren_lang_contanier1").classList.add("delay" + rnd);

  // start falde-animation på beskidt tøj
  document.querySelector("#beskidt_tee_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document.querySelector("#beskidt_tee_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document
    .querySelector("#beskidt_tee_contanier1")
    .classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document
    .querySelector("#beskidt_tee_contanier1")
    .classList.add("delay" + rnd);

  //beskidt kjole
  document.querySelector("#beskidt_kjole_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document
    .querySelector("#beskidt_kjole_contanier1")
    .classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document
    .querySelector("#beskidt_kjole_contanier1")
    .classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document
    .querySelector("#beskidt_kjole_contanier1")
    .classList.add("delay" + rnd);

  //beskidt sokker
  document.querySelector("#beskidt_sokker_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document
    .querySelector("#beskidt_sokker_contanier1")
    .classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document
    .querySelector("#beskidt_sokker_contanier1")
    .classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document
    .querySelector("#beskidt_sokker_contanier1")
    .classList.add("delay" + rnd);

  //beskidt lang
  document.querySelector("#beskidt_lang_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document.querySelector("#beskidt_lang_contanier1").classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document
    .querySelector("#beskidt_lang_contanier1")
    .classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document
    .querySelector("#beskidt_lang_contanier1")
    .classList.add("delay" + rnd);
  //beskidte bukser

  document.querySelector("#beskidt_bukser_contanier1").classList.add("fald");

  rnd = generateRandomNumber(6);
  document
    .querySelector("#beskidt_bukser_contanier1")
    .classList.add("pos" + rnd);

  rnd = generateRandomNumber(2);
  document
    .querySelector("#beskidt_bukser_contanier1")
    .classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document
    .querySelector("#beskidt_bukser_contanier1")
    .classList.add("delay" + rnd);

  //lyd efter click på ren tee

  // lyt efter klik på ren tee, gå til funktionen click_ren_tee hvis der klikkes
  document
    .querySelector("#ren_tee_contanier1")
    .addEventListener("mousedown", click_ren_tee);

  document
    .querySelector("#ren_bukser_contanier1")
    .addEventListener("mousedown", click_ren_tee);

  document
    .querySelector("#ren_kjole_contanier1")
    .addEventListener("mousedown", click_ren_tee);

  document
    .querySelector("#ren_sokker_contanier1")
    .addEventListener("mousedown", click_ren_tee);

  document
    .querySelector("#ren_lang_contanier1")
    .addEventListener("mousedown", click_ren_tee);

  // lyt efter klik på beskidt tøj, gå til funktionen click_beskidt_tee hvis der klikkes
  document
    .querySelector("#beskidt_tee_contanier1")
    .addEventListener("mousedown", click_beskidt_tee);

  document
    .querySelector("#beskidt_bukser_contanier1")
    .addEventListener("mousedown", click_beskidt_tee);

  document
    .querySelector("#beskidt_kjole_contanier1")
    .addEventListener("mousedown", click_beskidt_tee);

  document
    .querySelector("#beskidt_sokker_contanier1")
    .addEventListener("mousedown", click_beskidt_tee);

  document
    .querySelector("#beskidt_lang_contanier1")
    .addEventListener("mousedown", click_beskidt_tee);

  document
    .querySelector("#bombe_contanier1")
    .addEventListener("mousedown", click_bombe);
  // når det rene tøj har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document
    .querySelector("#ren_tee_contanier1")
    .addEventListener("animationiteration", reset_ren_tee);

  document
    .querySelector("#ren_bukser_contanier1")
    .addEventListener("animationiteration", reset_ren_tee);

  document
    .querySelector("#ren_kjole_contanier1")
    .addEventListener("animationiteration", reset_ren_tee);

  document
    .querySelector("#ren_sokker_contanier1")
    .addEventListener("animationiteration", reset_ren_tee);

  document
    .querySelector("#ren_lang_contanier1")
    .addEventListener("animationiteration", reset_ren_tee);
  // når det beskidte tøj har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document
    .querySelector("#beskidt_tee_contanier1")
    .addEventListener("animationiteration", reset_beskidt_tee);

  document
    .querySelector("#beskidt_bukser_contanier1")
    .addEventListener("animationiteration", reset_beskidt_tee);

  document
    .querySelector("#beskidt_kjole_contanier1")
    .addEventListener("animationiteration", reset_beskidt_tee);

  document
    .querySelector("#beskidt_lang_contanier1")
    .addEventListener("animationiteration", reset_beskidt_tee);

  document
    .querySelector("#beskidt_sokker_contanier1")
    .addEventListener("animationiteration", reset_beskidt_tee);

  document
    .querySelector("#bombe_contanier1")
    .addEventListener("animationiteration", reset_bombe);
}
function click_ren_tee() {
  console.log("click_ren_tee");
  console.log(this);

  //stop med at lytte efter klik
  this.removeEventListener("click", click_ren_tee);

  // afspil carljohan lyd

  ren_snd.play();
  //tæl op på ponit
  point = point + 1;

  //vis nye point-tal
  document.querySelector("#mine_point").textContent = point;

  //stoppe falde animationen på container
  this.classList.add("frys");

  //sæt forsvind animationen på sprite
  this.firstElementChild.classList.add("forsvind");

  // Går til reset funktionen når forsvind-animationen er færdig
  this.addEventListener("animationend", reset_ren_tee);
}
function click_beskidt_tee() {
  console.log("click_beskidt_tee");
  console.log(this);

  //stop med at lytte efter klik
  document;
  this.removeEventListener("mousedown", click_beskidt_tee);

  // afspil fluesvamp lyd

  beskidt_snd.play();

  //tæl ned på ponit
  point = point - 1;

  // Vis opdateret antal ponit på siden
  document.querySelector("#mine_point").textContent = point;

  // Stop falde-animation på container (sæt på pause ved at tilføje klassen frys)
  this.classList.add("frys");

  // Start forsvind-animation på sprite
  this.firstElementChild.classList.add("forsvind");

  // Går til reset funktionen når forsvind-animationen er færdig

  this.addEventListener("animationend", reset_beskidt_tee);
}
function click_bombe() {
  console.log("click_bombe");

  //stop med at lytte efter klik
  document
    .querySelector("#bombe_contanier1")
    .removeEventListener("mousedown", click_bombe);

  // afspil fluesvamp lyd
  bombe_snd.play();
  //tæl op på ponit
  liv = liv - 1;

  // Vis opdateret antal ponit på siden
  document.querySelector("#mine_liv").textContent = liv;

  if (liv <= 0) {
    endGame();
  }

  // Stop falde-animation på container (sæt på pause ved at tilføje klassen frys)
  document.querySelector("#bombe_contanier1").classList.add("frys");

  // Start forsvind-animation på sprite
  document.querySelector("#bombe_sprite1").classList.add("forsvind");

  // Går til reset funktionen når forsvind-animationen er færdig
  document
    .querySelector("#bombe_contanier1")
    .addEventListener("animationend", reset_bombe);
}
function reset_ren_tee() {
  console.log("reset_ren_tee");
  //fjerner alle klasser fra conttainers classlist (position, frys)
  this.classList = "";

  //fjern alle klasser fra carljohans sprite (forsvind)
  this.firstElementChild.classList = "";

  // genstart falde-animation (faldeanimation sættes på igen)
  this.offsetHeight;
  this.classList.add("fald");

  // Ny random position
  let rnd = generateRandomNumber(6);
  this.classList.add("pos" + rnd);

  // Ny random speed
  rnd = generateRandomNumber(2);
  this.classList.add("speed" + rnd);

  // Ny random delay
  rnd = generateRandomNumber(4);
  this.classList.add("delay" + rnd);

  // lyt efter klik på ren tee, gå til funktionen click_ren_tee hvis der klikkes
  this.addEventListener("click", click_ren_tee);
}
function reset_beskidt_tee() {
  console.log("reset_beskidt_tee");
  console.log(this);

  //fjern alle klasser fra carljohans container (hop, frys og pos)
  this.classList = "";

  //fjern alle klasser fra carljohans sprite (forsvind)
  this.firstElementChild.classList = "";

  // genstart falde-animation (faldeeanimation sættes på igen)
  this.offsetHeight;
  this.classList.add("fald");

  // ny random position
  let rnd = generateRandomNumber(6);
  this.classList.add("pos" + rnd);

  // Ny random speed
  rnd = generateRandomNumber(2);
  document;
  this.classList.add("speed" + rnd);

  // Ny random tid/delay
  rnd = generateRandomNumber(4);
  this.classList.add("delay" + rnd);

  // lyt efter klik på beskidt tee, gå til funktionen click_beskidt_tee hvis der klikkes
  this.addEventListener("click", click_beskidt_tee);
}
function reset_bombe() {
  console.log("reset_bombe");

  //fjern alle klasser fra carljohans container (hop, frys og pos)
  document.querySelector("#bombe_contanier1").classList = "";

  //fjern alle klasser fra carljohans sprite (forsvind)
  document.querySelector("#bombe_sprite1").classList = "";

  // genstart falde-animation (faldeeanimation sættes på igen)
  document.querySelector("#bombe_contanier1").offsetHeight;
  document.querySelector("#bombe_contanier1").classList.add("fald");

  // ny random position
  let rnd = generateRandomNumber(6);
  document.querySelector("#bombe_contanier1").classList.add("pos" + rnd);

  // Ny random speed
  rnd = generateRandomNumber(2);
  document.querySelector("#bombe_contanier1").classList.add("speed" + rnd);

  // Ny random tid/delay
  rnd = generateRandomNumber(4);
  document.querySelector("#bombe_contanier1").classList.add("delay" + rnd);

  // lyt efter klik på beskidt tee, gå til funktionen click_beskidt_tee hvis der klikkes
  document
    .querySelector("#bombe_contanier1")
    .addEventListener("click", click_bombe);
}
function endGame() {
  console.log("endGame");

  document.querySelector("#ren_tee_contanier1").classList.remove("fald");
  document.querySelector("#beskidt_tee_contanier1").classList.remove("fald");
  document.querySelector("#bombe_contanier1").classList.remove("fald");

  document
    .querySelector("#ren_tee_contanier1")
    .removeEventListener("click", click_ren_tee);
  document
    .querySelector("#beskidt_tee_contanier1")
    .removeEventListener("click", click_beskidt_tee);
  document
    .querySelector("#bombe_contanier1")
    .removeEventListener("click", click_bombe);

  // når fluesvamp har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  document
    .querySelector("#ren_tee_contanier1")
    .removeEventListener("animationiteration", reset_ren_tee);
  document
    .querySelector("#beskidt_tee_contanier1")
    .removeEventListener("animationiteration", reset_beskidt_tee);
  document
    .querySelector("#bombe_contanier1")
    .removeEventListener("animationiteration", reset_bombe);

  document
    .querySelector("#ren_tee_contanier1")
    .removeEventListener("animationend", reset_ren_tee);
  document
    .querySelector("#beskidt_tee_contanier1")
    .removeEventListener("animationend", reset_beskidt_tee);
  document
    .querySelector("#bombe_contanier1")
    .removeEventListener("animationend", reset_bombe);

  document
    .querySelector("#ren_tee_contanier1")
    .removeEventListener("mousedown", click_ren_tee);
  document
    .querySelector("#beskidt_tee_contanier1")
    .removeEventListener("mousedown", click_beskidt_tee);
  document
    .querySelector("#bombe_contanier1")
    .removeEventListener("mousedown", click_bombe);

  document.querySelector("#minut_viser").classList.remove("minut_animation");
  document.querySelector("#time_viser").classList.remove("time_animation");

  //Når animationen er færdig kaldes funktionen endGame()
  document
    .querySelector("#minut_viser")
    .removeEventListener("animationend", endGame);

  if (liv <= 0) {
    gameOver();
  } else if (point >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("gameOver");

  document
    .querySelector("#minut_viser")
    .removeEventListener("animationend", endGame);
  document
    .querySelector("#time_viser")
    .removeEventListener("animationend", endGame);

  hideAllScreens();

  document.querySelector("#game_over").classList.remove("hide");

  document.querySelector("#try_again").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("levelComplete");

  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");

  document
    .querySelector("#level_complete")
    .addEventListener("click", startGame);
}

function generateRandomNumber(num) {
  let rndNumber = Math.random();
  rndNumber = rndNumber * num;
  rndNumber = Math.floor(rndNumber);
  rndNumber = rndNumber + 1;

  return rndNumber;
}

function hideAllScreens() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}
