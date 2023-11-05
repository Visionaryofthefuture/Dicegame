
    // this is the random number generation part 
    var random_number1 = Math.floor(Math.random()*6 +1);
    var random_number2 = Math.floor(Math.random()*6 +1);

    var result1 = "./images/dice" +random_number1+ ".png";
    var result2 = "./images/dice" +random_number2+ ".png";
    var att = document.querySelectorAll("img");
    att[0].setAttribute("src", result1);
    att[1].setAttribute("src", result2);

    if(result1 > result2)
    {
        document.querySelector("h1").innerHTML = "Player1 wins";
    }
    if(result2 > result1)
    {
       document.querySelector("h1").innerHTML = "Player 2 wins";
        
    }
    if(result1 == result2)
    {
       document.querySelector("h1").innerHTML = "DRAW";
    }