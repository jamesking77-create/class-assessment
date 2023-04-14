let guessingGame = function (input){ 
    let birthday = 7;
   if(input != birthday){
    console.log(`try again`);
   }
    if(input == birthday){
        console.log(`congratulation you guessed right, my birthday july is ${birthday}th`);  
    }

    
}

console.log(guessingGame(8))