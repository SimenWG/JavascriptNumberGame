let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.getElementById("submitguess").onclick = checkGuess;
document.getElementById("gjett").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    let x = document.getElementById("gjett").value;

    if (x == y) {
        alert("Gratulerer du gjettet det!");
    } else if (x > y) {
        guess++;
        alert("Prøv et lavere tall");
    } else {
        guess++;
        alert("Prøv et større tall");
    }
}
