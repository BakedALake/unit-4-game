//-----------------------Variables-----------------------
var currentSP, neededSP, star1Val, star2Val, star3Val, star4Val;
var starValues = [];
var winCnt = 0, lossCnt = 0;

// -----------------------Functions-----------------------

// On click, add points to currentSP based on star clicked, check for win.
function clickedStar(pressedStar) {
    switch (pressedStar) {
        case "star1":
            currentSP = currentSP + star1Val;
            break;

        case "star2":
            currentSP = currentSP + star2Val;
            break;

        case "star3":
            currentSP = currentSP + star3Val;
            break;

        case "star4":
            currentSP = currentSP + star4Val;
            break;
    }

    updateDisp();

    // Win condition!
    if (currentSP === neededSP){
        winCnt++;

        // Start new game.
        newGame();
    }

    // Loss condition!
    else if (currentSP > neededSP){
        lossCnt++;

        // Start new game.
        newGame();
    }
}

// Get random amount for a star.
function starAssign(currentStar) {
    var checkToRepeat = false;    
    do {
        
        currentStar = Math.ceil(Math.random() * 12);
        if (starValues.includes(currentStar, 0) === false){
            starValues.push(currentStar);
            checkToRepeat = true;
            return currentStar;
        }
    }
    while (checkToRepeat === false);
}

function updateDisp(){
    $('h2#currentSP').text("Current Star Power: "  + currentSP);
    $('h2#spNeeded').text("Star Power Needed: "  + neededSP);
    $('h3#wins').text("Wins: "  + winCnt);
    $('h3#loss').text("Losses: "  + lossCnt);
}

function newGame() {
    star1Val = starAssign(star1Val);
    star2Val = starAssign(star2Val);
    star3Val = starAssign(star3Val);
    star4Val = starAssign(star4Val);
    currentSP = 0;
    neededSP = Math.ceil(Math.random() * 101) + 12;
    starValues = [];

    updateDisp();

    console.log(star1Val + " " + star2Val + " " + star3Val + " " + star4Val);
}

//-----------------------Main steps-----------------------
newGame();

  $("button").click(function() {
      console.log(this.id + " was clicked!")
    clickedStar(this.id);
});

