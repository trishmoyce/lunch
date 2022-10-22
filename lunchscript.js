// list of foods in an array

var foodlist = ["American (New)", "Asian Fusion", "Bento and Donburi", "BBQ", "Brunch", "Burgers", "Cheesesteaks", "Chinese", "Creperies", "Deli Sandwiches", "Dim Sum", "Ethiopian", "Filipino", "French", "Fried Chicken", "German", "Hawaiian", "Hot Dogs", "Hot Sandwiches", "Italian", "Indian", "Korean", "Mediterranean", "Mexican", "Pizza", "Poke", "Pub Food", "Pupusas", "Ramen", "Seafood", "Southern", "Steak", "Sushi", "Tapas", "Thai", "Vietnamese", "Wings" ];

// displays random cuisine

function displayRandomFood(foodlist) {
    const foodsuggestion = document.querySelector("#foodsuggestion");
    if (foodlist == 0) {
        foodsuggestion.textContent = "Maybe You Aren't Hungry?";
    } else {
        foodsuggestion.textContent = foodlist[Math.floor(Math.random()*foodlist.length)];
    }
};

// removes cuisine from array when it's been selected

function removeFromArray() {
    const foodsuggestion = document.querySelector("#foodsuggestion");
    for (let i = 0; i < foodlist.length; i++) {
        if ( foodlist[i] == foodsuggestion.textContent) {
            foodlist.splice(i, 1);
        }
    }
};

// unhides decision buttons

function displayDecisionBtns() {
    document.querySelector("#decisionbtns").style.display = "grid";
}

// displays random cuisine and unhides decision buttons on "suggest" button click

function suggestbtnclicked() {
    displayRandomFood(foodlist);
    removeFromArray();
    if (foodlist != 0) {
        displayDecisionBtns();
    } else if (foodlist == 0) {
        document.querySelector("#decisionbtns").style.display = "none";
    }
};

suggestbtn.addEventListener("click", suggestbtnclicked);

// "yes" button functionality

function yesclicked() {
    function addyestext() {
        var foodsuggestion = document.querySelector("#foodsuggestion");
        var yestext = document.createElement("div");
        yestext.setAttribute("id", "yestext");
        yestext.textContent = "You Have Decided!";
        foodsuggestion.before(yestext);
    };
    function deletesuggestbtn() {
        const suggestbtn = document.querySelector("#suggestbtn");
        suggestbtn.remove();
    };
    function deletecurrent() {
        const decisionbtns = document.querySelector("#decisionbtns");
        decisionbtns.remove();
    };
    addyestext();
    deletesuggestbtn();
    deletecurrent();
};

yesbtn.addEventListener("click", yesclicked);

// hides all decision buttons

function hideDecisionBtns() {
    document.querySelector("#decisionbtns").style.display = "none";
};

// "maybe" button functionality

function maybeclicked() {
    function displayMaybeText() {
        const maybetext = document.querySelector("#maybetext");
        maybetext.textContent += `${document.querySelector("#foodsuggestion").textContent} `;
    };
    displayMaybeText();
    hideDecisionBtns();
}

maybebtn.addEventListener("click", maybeclicked);

// "no" button functionality

function noclicked() {
    function displayNoText() {
        const notext = document.querySelector("#notext");
        notext.textContent += `${document.querySelector("#foodsuggestion").textContent} `;
    };
    displayNoText();
    hideDecisionBtns();
}

nobtn.addEventListener("click", noclicked);