window.onclick = function() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let decideWinner = document.querySelector("h1")

    let player1Img = document.querySelector(".img1")
    let player2Img = document.querySelector(".img2")

    player1Img.setAttribute("src", `images/dice${randomNumber1}.png`)
    player2Img.setAttribute("src", `images/dice${randomNumber2}.png`)

    if (randomNumber1 == randomNumber2) {
        decideWinner.innerText = "Drow"
    } else if (randomNumber1 > randomNumber2) {
        decideWinner.innerText = "Player 1 wins!"
    } else if (randomNumber1 < randomNumber2) {
        decideWinner.innerText = "Player 2 wins!"
    }
}