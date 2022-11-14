var addOneHome = document.getElementById("addOneHome");
var addTwoHome = document.getElementById("addTwoHome");
var addThreeHome = document.getElementById("addThreeHome");

var addOneGuest = document.getElementById("addOneGuest");
var addTwoGuest = document.getElementById("addTwoGuest");
var addThreeGuest = document.getElementById("addThreeGuest");


var newGame = document.getElementById("newGame");
var scoreHome = document.querySelector(".scoreHome");
var scoreGuest = document.querySelector(".scoreGuest");


var chgHome = document.getElementById("changeHome");
var chgGuest = document.getElementById("changeGuest");

var homeTotal = 0;
var guestTotal = 0;



console.log(addOneHome);
console.log(addTwoHome);
console.log(addThreeHome);
console.log(addOneGuest);
console.log(addTwoGuest);
console.log(addThreeGuest);
console.log(newGame);

console.log(scoreHome);
console.log(scoreGuest);

console.log(chgHome);
console.log(chgGuest);

function addOneHomeScore() {
    homeTotal++;
    chgHome.innerHTML = homeTotal;
    compareValues();
}

function addOneGuestScore() {
    guestTotal++;
    chgGuest.innerHTML = guestTotal;
    compareValues();
}



function addTwoHomeScore() {
    homeTotal = homeTotal + 2;
    chgHome.innerHTML = homeTotal;
    compareValues();
}

function addTwoGuestScore() {
    guestTotal = guestTotal + 2;
    chgGuest.innerHTML = guestTotal;
    compareValues();
}

function addThreeHomeScore() {
    homeTotal = homeTotal + 3;
    chgHome.innerHTML = homeTotal;
    compareValues();
}

function addThreeGuestScore() {
    guestTotal = guestTotal + 3;
    chgGuest.innerHTML = guestTotal;
    compareValues();
}

function resetHomeAndGuest() {
    /*homeTotal = 0;
    guestTotal = 0;
    chgHome.innerHTML = homeTotal;
    chgGuest.innerHTML = guestTotal;
    scoreHome.classList.remove("blink");
    scoreGuest.classList.remove("blink");*/
    location.reload(); 

}



function compareValues() {
    if (homeTotal > guestTotal) {
        console.log("hello");
        scoreHome.classList.add("blink");
        scoreGuest.classList.remove("blink");
        
    }
    else if (homeTotal < guestTotal) {
        console.log("goodbye");
        
        scoreHome.classList.remove("blink");
        scoreGuest.classList.add("blink");
    }
    else if (homeTotal === guestTotal) {
        scoreHome.classList.remove("blink");
        scoreGuest.classList.remove("blink");
    }
}

addOneHome.onclick = addOneHomeScore;
addOneGuest.onclick = addOneGuestScore;

addTwoHome.onclick = addTwoHomeScore;
addTwoGuest.onclick = addTwoGuestScore;

addThreeHome.onclick = addThreeHomeScore;
addThreeGuest.onclick = addThreeGuestScore;

newGame.onclick = resetHomeAndGuest;

