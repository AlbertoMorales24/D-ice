function random(){

    var randomNumber1 = Math.floor(Math.random()*(6))+1;
    switch (randomNumber1) {
        case 1:
            document.getElementById("img1").src="images/dice1.png";
            break;
        case 2:
            document.getElementById("img1").src="images/dice2.png";
            break;
        case 3:
            document.getElementById("img1").src="images/dice3.png";
            break;
        case 4:
            document.getElementById("img1").src="images/dice4.png";
            break;
        case 5:
            document.getElementById("img1").src="images/dice5.png";
            break;
        case 6:
            document.getElementById("img1").src="images/dice6.png";
            break;
    }

    var randomNumber2 = Math.floor(Math.random()*(6))+1;
    switch (randomNumber2) {
        case 1:
            document.getElementById("img2").src="images/dice1.png";
            break;
        case 2:
            document.getElementById("img2").src="images/dice2.png";
            break;
        case 3:
            document.getElementById("img2").src="images/dice3.png";
            break;
        case 4:
            document.getElementById("img2").src="images/dice4.png";
            break;
        case 5:
            document.getElementById("img2").src="images/dice5.png";
            break;
        case 6:
            document.getElementById("img2").src="images/dice6.png";
            break;
    }

    if(randomNumber1>randomNumber2){
        document.getElementById("header").innerHTML="Player 1 Wins";
    }else if(randomNumber2>randomNumber1){
        document.getElementById("header").innerHTML="Player 2 Wins";
    }
    else{
        document.getElementById("header").innerHTML="Tie";
    }
}