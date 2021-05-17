var divId,
  spanId,
  text,
  textr,
  timesClick = 100,
  moving,
  randomNumber,
  randomNumber2,
  imgId,
  imgS,
  dice,
  dicen = 0,
  dice2,
  dicen2 = 0,
  flager = false,
  flager2 = false,
  namep,
  namep2,
  i,
  x;
// gameBoard
function gameBoard() {
  divc.style.display = "block"; // show divc
  // div with container class
  divId = document.createElement("div"); //make div
  divId.className = "container"; // div class
  for (i = 0; i < 10; i++) {
    spanId = document.createElement("span"); // make span
    spanId.id = "span" + timesClick; // span id (must be before timesclick++)
    text = document.createTextNode(timesClick--); //span text
    spanId.appendChild(text); // append text to span
    // spanId.addEventListener("click", numberTime); // number in the span
    divId.appendChild(spanId); // append span to div
    document.getElementById("divc").appendChild(divId); //append div to #divc in html
  }
  // div with containerl class
  divId = document.createElement("div"); //make div
  divId.className = "containerl"; // div class
  for (i = 0; i < 10; i++) {
    spanId = document.createElement("span"); // make span
    spanId.id = "span" + timesClick; // span id (must be before timesclick++)
    text = document.createTextNode(timesClick--); //span text
    spanId.appendChild(text); // append text to span
    // spanId.addEventListener("click", numberTime); // number in the span
    divId.appendChild(spanId); // append span to div
    document.getElementById("divc").appendChild(divId); //append div to #divc in html
  }
  // 	  function numberTime() {
  // 	  spanId.removeChild(text);
  // };
}
// game starter
function startGame() {
  for (x = 0; x < 5; x++) {
    gameBoard();
  }
  // remove start button then show reset button with tools and toolr
  startbutton.style.display = "none";
  restartbutton.style.display = "block";
  toolreset.style.display = "block";
  toolstart.style.display = "none";
  pawnpoint.style.display = "block";
}
//game restart
function restartGame() {
  window.location.reload(); // reload page
}
//add player
function addPlayer() {
  document.getElementById("bplayer").disabled = true;
  document.getElementById("bplayer2").disabled = true;
  timesClick++;
  // randomNumber = Math.floor(Math.random() * 9)+ 1;
  imgId = document.createElement("img"); // make img
  document.getElementById("divimg").appendChild(imgId); // append img to div
  imgId.src = "image/pawn/pawn" + timesClick + ".png";
  imgId.style.height = 30 + "px";
  imgId.style.width = 30 + "px";
  imgId.id = "imgpawn" + timesClick;
  player.style.display = "block";
  if (timesClick == 2) {
    player2.style.display = "block";
    // document.getElementById("baddplayer").disabled = true;
    baddplayer.style.display = "none";
  }
}
// player 1 name
function inp() {
  namep = document.getElementById("iplayer").value;
  document.getElementById("pnc").innerHTML = namep;
  bbp.style.display = "none";
  iplayer.style.display = "none";
}
// player 2 name
function inp2() {
  namep2 = document.getElementById("iplayer2").value;
  document.getElementById("pnc2").innerHTML = namep2;
  bbp2.style.display = "none";
  iplayer2.style.display = "none";
  document.getElementById("bplayer").disabled = false;
}
//player mover
function playerMover() {
  document.getElementById("bplayer").disabled = true;
  document.getElementById("bplayer2").disabled = false;
  randomNumber = Math.floor(Math.random() * 6) + 1; //rdn
  document.getElementById("diceroller").innerHTML = randomNumber; // rdn dice inner html
  document.getElementById("dimg").src =
    "image/dice/dice" + randomNumber + ".png";
  if (randomNumber == 6 && flager == false) {
    flager = true; // so the function runs only 1 time
    alert(namep + " Can start the game!");
    setTimeout(function () {
      moving = document.getElementById("spanstart");
      moving.append(imgpawn1);
    }, 400);
  } else if (flager == true && dicen <= 100) {
    dice = Math.floor(Math.random() * 6) + 1;
    dicen += dice;
    document.getElementById("diceroller").innerHTML = dice;
    document.getElementById("dimg").src = "image/dice/dice" + dice + ".png"; // rdn dice
    if (flager == true && dicen >= 100) {
      alert(namep + "Wins");
      setTimeout(function () {
        document.getElementById("dimg").src = "image/cup.png";
        document.getElementById("dimg2").src = "image/cupl.png";
        document.getElementById("bplayer").disabled = true;
        document.getElementById("bplayer2").disabled = true;
        restartbutton.style.background = "red";
        moving = document.getElementById("span100");
        moving.append(imgpawn1);
      }, 500);
    }
    setTimeout(function () {
      moving = document.getElementById("span" + dicen);
      moving.append(imgpawn1);
    }, 400);
    //ladders
    if (dicen == 15) {
      alert(namep + " found a ladder!");
      moving = document.getElementById("span15");
      moving.append(imgpawn1);
      dicen = 35;
      etTimeout(function () {
        moving = document.getElementById("span35");
        moving.append(imgpawn1);
      }, 1200);
    } //2
    else if (dicen == 57) {
      alert(namep + " found a ladder!");
      moving = document.getElementById("span57");
      moving.append(imgpawn1);
      dicen = 87;
      etTimeout(function () {
        moving = document.getElementById("span87");
        moving.append(imgpawn1);
      }, 1200);
    } //3
    else if (dicen == 64) {
      alert(namep + " found a ladder!");
      moving = document.getElementById("span64");
      moving.append(imgpawn1);
      dicen = 84;
      etTimeout(function () {
        moving = document.getElementById("span84");
        moving.append(imgpawn1);
      }, 1200);
    } //4
    else if (dicen == 88) {
      alert(namep + " found a ladder!");
      moving = document.getElementById("span88");
      moving.append(imgpawn1);
      dicen = 98;
      etTimeout(function () {
        moving = document.getElementById("span98");
        moving.append(imgpawn1);
      }, 1200);
    } //5
    else if (dicen == 8) {
      alert(namep + " found a ladder!");
      moving = document.getElementById("span8");
      moving.append(imgpawn1);
      dicen = 18;
      etTimeout(function () {
        moving = document.getElementById("span18");
        moving.append(imgpawn1);
      }, 1200);
    }
    //snakes
    else if (dicen == 39) {
      alert("A snake bited" + namep + "!");
      moving = document.getElementById("span39");
      moving.append(imgpawn1);
      dicen = 19;
      etTimeout(function () {
        moving = document.getElementById("span19");
        moving.append(imgpawn1);
      }, 1200);
    } //2
    else if (dicen == 42) {
      alert("A snake bited " + namep + "!");
      moving = document.getElementById("span42");
      moving.append(imgpawn1);
      dicen = 22;
      etTimeout(function () {
        moving = document.getElementById("span22");
        moving.append(imgpawn1);
      }, 1200);
    } //3
    else if (dicen == 99) {
      alert("A snake bited " + namep + "!");
      moving = document.getElementById("span99");
      moving.append(imgpawn1);
      dicen = 59;
      etTimeout(function () {
        moving = document.getElementById("span59");
        moving.append(imgpawn1);
      }, 1200);
    } //4
    else if (dicen == 56) {
      alert("A snake bited " + namep + "!");
      moving = document.getElementById("span56");
      moving.append(imgpawn1);
      dicen = 36;
      etTimeout(function () {
        moving = document.getElementById("span36");
        moving.append(imgpawn1);
      }, 1200);
    } //5
    else if (dicen == 86) {
      alert("A snake bited " + namep + "!");
      moving = document.getElementById("span86");
      moving.append(imgpawn1);
      dicen = 66;
      etTimeout(function () {
        moving = document.getElementById("span66");
        moving.append(imgpawn1);
      }, 1200);
    }
  }
}
function playerMover2() {
  document.getElementById("bplayer2").disabled = true;
  document.getElementById("bplayer").disabled = false;
  randomNumber2 = Math.floor(Math.random() * 6) + 1; //rdn
  document.getElementById("diceroller2").innerHTML = randomNumber2; // rdn dice inner html
  document.getElementById("dimg2").src =
    "image/dice/dice" + randomNumber2 + ".png";
  if (randomNumber2 == 6 && flager2 == false) {
    flager2 = true; // so the function runs only 1 time
    alert(namep2 + " Can start the game!");
    setTimeout(function () {
      moving = document.getElementById("spanstart");
      moving.append(imgpawn2);
    }, 400);
  } else if (flager2 == true && dicen2 <= 100) {
    dice2 = Math.floor(Math.random() * 6) + 1;
    dicen2 += dice2;
    document.getElementById("diceroller2").innerHTML = dice2;
    document.getElementById("dimg2").src = "image/dice/dice" + dice2 + ".png"; // rdn dice
    if (flager2 == true && dicen2 >= 100) {
      alert(namep2 + " Wins");
      setTimeout(function () {
        document.getElementById("dimg").src = "image/cupl.png";
        document.getElementById("dimg2").src = "image/cup.png";
        document.getElementById("bplayer").disabled = true;
        document.getElementById("bplayer2").disabled = true;
        restartbutton.style.background = "red";
        moving = document.getElementById("span100");
        moving.append(imgpawn2);
      }, 500);
    }
    setTimeout(function () {
      moving = document.getElementById("span" + dicen2);
      moving.append(imgpawn2);
    }, 400);
    //ladders
    if (dicen2 == 15) {
      alert(namep2 + "found a ladder!");
      moving = document.getElementById("span15");
      moving.append(imgpawn2);
      dicen2 = 35;
      etTimeout(function () {
        moving = document.getElementById("span35");
        moving.append(imgpawn2);
      }, 1200);
    } //2
    else if (dicen2 == 57) {
      alert(namep2 + " found a ladder!");
      moving = document.getElementById("span57");
      moving.append(imgpawn2);
      dicen2 = 87;
      etTimeout(function () {
        moving = document.getElementById("span87");
        moving.append(imgpawn2);
      }, 1200);
    } //3
    else if (dicen2 == 64) {
      alert(namep2 + " found a ladder!");
      moving = document.getElementById("span64");
      moving.appennamep2 + d(imgpawn2);
      dicen2 = 84;
      etTimeout(function () {
        moving = document.getElementById("span84");
        moving.append(imgpawn2);
      }, 1200);
    } //4
    else if (dicen2 == 88) {
      alert(namep2 + " found a ladder!");
      moving = document.getElementById("span88");
      moving.append(imgpawn2);
      dicen2 = 98;
      etTimeout(function () {
        moving = document.getElementById("span98");
        moving.append(imgpawn2);
      }, 1200);
    } //5
    else if (dicen2 == 8) {
      alert(namep2 + " found a ladder!");
      moving = document.getElementById("span8");
      moving.append(imgpawn2);
      dicen2 = 18;
      etTimeout(function () {
        moving = document.getElementById("span18");
        moving.append(imgpawn2);
      }, 1200);
    }
    //snakes
    else if (dicen2 == 39) {
      alert("A snake bited " + namep2 + "!");
      moving = document.getElementById("span39");
      moving.append(imgpawn2);
      dicen2 = 19;
      etTimeout(function () {
        moving = document.getElementById("span19");
        moving.append(imgpawn2);
      }, 1200);
    } //2
    else if (dicen2 == 42) {
      alert("A snake bited " + namep2 + "!");
      moving = document.getElementById("span42");
      moving.append(imgpawn2);
      dicen2 = 22;
      etTimeout(function () {
        moving = document.getElementById("span22");
        moving.append(imgpawn2);
      }, 1200);
    } //3
    else if (dicen2 == 99) {
      alert("A snake bited " + namep2 + "!");
      moving = document.getElementById("span99");
      moving.append(imgpawn2);
      dicen2 = 59;
      etTimeout(function () {
        moving = document.getElementById("span59");
        moving.append(imgpawn2);
      }, 1200);
    } //4
    else if (dicen2 == 56) {
      alert("A snake bited " + namep2 + "!");
      moving = document.getElementById("span56");
      moving.append(imgpawn2);
      dicen2 = 36;
      etTimeout(function () {
        moving = document.getElementById("span36");
        moving.append(imgpawn2);
      }, 1200);
    } //5
    else if (dicen2 == 86) {
      alert("A snake bited " + namep2 + "!");
      moving = document.getElementById("span86");
      moving.append(imgpawn2);
      dicen2 = 66;
      etTimeout(function () {
        moving = document.getElementById("span66");
        moving.append(imgpawn2);
      }, 1200);
    }
  }
}
