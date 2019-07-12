let guessNum;
var win = new Audio();
let numOfTrys = 0;
win.src = "/sounds/Ta Da-SoundBible.com-1884170640.mp3";
startGame = (form) => {
  
    
        numOfTrys = 0;
        giveUpText = "";
        answerText = "";
        document.getElementById("Answer").innerHTML = answerText;
        document.getElementById("gaveUp").innerHTML = giveUpText;

        let firstNum = Math.floor(Math.random() * Math.floor(500));
        let SecNum = Math.floor(Math.random() * Math.floor(500));
    
        if (firstNum < SecNum) {
            document.getElementById("Begin").innerHTML = "Guess a Number between " + firstNum + " and " + SecNum;    
            guessNum = Math.floor(Math.random() * (SecNum-firstNum) ) + firstNum;
           
        }
        else if (SecNum < firstNum) {
            document.getElementById("Begin").innerHTML = "Guess a Number between " + SecNum + " and " + firstNum;
            guessNum = Math.floor(Math.random() * (firstNum - SecNum) ) + SecNum;
            
        }
        
        
    
}
guess = (form) => {
    let choosenNum = parseInt(form.inputBox.value);
    form.inputBox.value = "";
    numOfTrys ++;
    giveUpText = "";
    document.getElementById("gaveUp").innerHTML = giveUpText;
    
    let answerText = "You guessed " + choosenNum;

    if (isNaN(choosenNum)){
        answerText = "Lasted I checked your answer is not a number,<br>therefore your answer is automatically wrong,<br> please try again. ";
    }
    else if (choosenNum == guessNum){
        answerText +=" and you are...<br> Correct <br> Do you want to play again?"
    }
    else if (choosenNum !== guessNum) {
        answerText += " and you are...<br>Wrong<br>"
    }
   
    
    
    
    let difference = choosenNum - guessNum < 0 ? (choosenNum - guessNum) * -1 : choosenNum - guessNum;
    if (difference > 0) {

        if(difference > 10  && difference < 50){
            answerText +="<br>But you were within 50, so try again."
        }
        else if (difference < 10){
            answerText +="<br>But you were so close to the answer."
        }
        else if (difference > 50 && difference < 100){
            answerText +="<br>But you were within 100."
        }
        else if (difference > 100){
            answerText +="<br> And I hate to break it to you but<br> you weren't even close."
        }
    }
    else if (difference == 0){
        win.play();
        answerText = "You guessed " + choosenNum + " and you are... <br> Correct <br> Do you want to play again?<br>And it took you " + numOfTrys + " attempts to get it right.";
    }
    else{
        answerText = "I'm sorry to inform you but your answer is not up to our standards.<br> Please try again."
    }
    

    
    document.getElementById("Answer").innerHTML = answerText;
}

GiveUp = (form) => {
    let giveUpText = "The answer was " + guessNum;
    document.getElementById("gaveUp").innerHTML = giveUpText;

}