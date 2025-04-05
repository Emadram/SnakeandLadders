let timesClick = 100;
let dicen = 0, dicen2 = 0;
let flager = false, flager2 = false;
let namep, namep2;

const ladders = { 15: 35, 57: 87, 64: 84, 88: 98, 8: 18 };
const snakes = { 39: 19, 42: 22, 99: 59, 56: 36, 86: 66 };

function createSpanRow(containerClass) {
  const container = document.createElement("div");
  container.className = containerClass;
  for (let i = 0; i < 10; i++) {
    const span = document.createElement("span");
    span.id = "span" + timesClick;
    span.appendChild(document.createTextNode(timesClick--));
    container.appendChild(span);
  }
  document.getElementById("divc").appendChild(container);
}

function gameBoard() {
  document.getElementById("divc").style.display = "block";
  createSpanRow("container");
  createSpanRow("containerl");
}

function startGame() {
  for (let i = 0; i < 5; i++) gameBoard();
  startbutton.style.display = "none";
  restartbutton.style.display = "block";
  toolreset.style.display = "block";
  toolstart.style.display = "none";
  pawnpoint.style.display = "block";
}

function restartGame() {
  location.reload();
}

function addPlayer() {
  document.getElementById("bplayer").disabled = true;
  document.getElementById("bplayer2").disabled = true;
  timesClick++;
  const img = document.createElement("img");
  img.src = `image/pawn/pawn${timesClick}.png`;
  img.style = "height:30px;width:30px;";
  img.id = "imgpawn" + timesClick;
  document.getElementById("divimg").appendChild(img);
  player.style.display = "block";
  if (timesClick === 2) {
    player2.style.display = "block";
    baddplayer.style.display = "none";
  }
}

function inp() {
  namep = document.getElementById("iplayer").value;
  document.getElementById("pnc").innerText = namep;
  bbp.style.display = "none";
  iplayer.style.display = "none";
}

function inp2() {
  namep2 = document.getElementById("iplayer2").value;
  document.getElementById("pnc2").innerText = namep2;
  bbp2.style.display = "none";
  iplayer2.style.display = "none";
  document.getElementById("bplayer").disabled = false;
}

function movePawn(player, img, pos, name, diceDisplay, imgDisplay, winImage) {
  setTimeout(() => {
    document.getElementById("span" + pos).appendChild(img);
  }, 400);

  if (ladders[pos]) {
    alert(`${name} found a ladder!`);
    pos = ladders[pos];
    setTimeout(() => {
      document.getElementById("span" + pos).appendChild(img);
    }, 1200);
  } else if (snakes[pos]) {
    alert(`A snake bit ${name}!`);
    pos = snakes[pos];
    setTimeout(() => {
      document.getElementById("span" + pos).appendChild(img);
    }, 1200);
  }

  if (pos >= 100) {
    alert(`${name} Wins!`);
    setTimeout(() => {
      document.getElementById(imgDisplay).src = winImage;
      document.getElementById("bplayer").disabled = true;
      document.getElementById("bplayer2").disabled = true;
      restartbutton.style.background = "red";
      document.getElementById("span100").appendChild(img);
    }, 500);
  }

  return pos;
}

function playerMover() {
  document.getElementById("bplayer").disabled = true;
  document.getElementById("bplayer2").disabled = false;
  let roll = Math.floor(Math.random() * 6) + 1;
  diceroller.innerHTML = roll;
  dimg.src = `image/dice/dice${roll}.png`;

  if (roll === 6 && !flager) {
    flager = true;
    alert(`${namep} Can start the game!`);
    setTimeout(() => {
      document.getElementById("spanstart").appendChild(imgpawn1);
    }, 400);
    return;
  }

  if (flager && dicen < 100) {
    let dice = Math.floor(Math.random() * 6) + 1;
    dicen += dice;
    diceroller.innerHTML = dice;
    dimg.src = `image/dice/dice${dice}.png`;
    dicen = movePawn(1, imgpawn1, dicen, namep, "diceroller", "dimg", "image/cup.png");
  }
}

function playerMover2() {
  document.getElementById("bplayer2").disabled = true;
  document.getElementById("bplayer").disabled = false;
  let roll = Math.floor(Math.random() * 6) + 1;
  diceroller2.innerHTML = roll;
  dimg2.src = `image/dice/dice${roll}.png`;

  if (roll === 6 && !flager2) {
    flager2 = true;
    alert(`${namep2} Can start the game!`);
    setTimeout(() => {
      document.getElementById("spanstart").appendChild(imgpawn2);
    }, 400);
    return;
  }

  if (flager2 && dicen2 < 100) {
    let dice = Math.floor(Math.random() * 6) + 1;
    dicen2 += dice;
    diceroller2.innerHTML = dice;
    dimg2.src = `image/dice/dice${dice}.png`;
    dicen2 = movePawn(2, imgpawn2, dicen2, namep2, "diceroller2", "dimg2", "image/cup.png");
  }
}
