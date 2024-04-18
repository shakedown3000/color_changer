// - Erstelle vier SuperBalls: Durch das Anklicken eines SuperBalls ändert sich die Hintergrundfarbe des <body> und die Textfarbe der <h1>.
// - Nutze CSS um die Elemente zu stylen. Entweder nutzt du linear-gradient oder du sprichst jeden Halbkreis selber an.
// - In deinem JS definierst du dann die Funktionalität, d.h. du schreibst jeweils eine eigene Funktion für die SuperBalls.


function removeColor() {
    document.querySelector("#one").classList.remove("white");
    document.querySelector("#two").classList.remove("white");
    document.querySelector("#three").classList.remove("white");
    document.querySelector("#four").classList.remove("white");
}

// First Circle
document.querySelector(".one").addEventListener("click", changeColorOne);

function changeColorOne() {
    document.body.classList.add("one");
    removeColor();
    document.querySelector("#one").classList.add("white");
}

// Second Circle

document.querySelector(".two").addEventListener("click", changeColorTwo)

function changeColorTwo() {
    document.body.classList.add("two");
    removeColor();
    document.querySelector("#two").classList.add("white");
}

// Third Circle

document.querySelector(".three").addEventListener("click", changeColorThree)

function changeColorThree() {
    document.body.classList.add("three");
    removeColor();
    document.querySelector("#three").classList.add("white");
}

// Fourth Circle

document.querySelector(".four").addEventListener("click", changeColorFour)

function changeColorFour() {
    document.body.classList.add("four");
    removeColor();
    document.querySelector("#four").classList.add("white");
}