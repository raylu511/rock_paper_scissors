// 1-rock 2-paper 3-scissors
function playRound() 
{
    let you = prompt("1-rock 2-paper 3-scissors") ; 
    console.log(you) ; 
    let cpu = Math.floor(Math.random()*3) + 1 // Generates a random number between 1 - 3 ; 
    console.log(cpu) ;    
    let message ; 
    
    if(you==1)
    {
        if(cpu==1)
             message = "It's a tie" ; 
        
        else if(cpu==2)
             message = "You lose" ; 
         
        else
         message = "You win" ; 
   }
    if(you==2)
    {
        if(cpu==1) 
           message = "You win" ;
          
        
        else if(cpu==2) 
           message = "It's a tie" ; 
        
        else 
            message = "You lose" ;        
    }
    if(you==3) 
    {
        if(cpu==1)
            message = "You lose" ; 

        else if(cpu==2)
            message = "You win" ; 
        
        else
            message = "It's a tie" ; 
    }
    return message ;
}

function game()
{
    let winCounter = 0, loseCounter = 0, tieCounter=0 ;
    let i ; 
    let result; 
    let message ; 
    for (i=0;i<5;i++)
    {
    result = playRound();
    if(result=="You win") 
    winCounter++ ; 
    else if(result=="You lose")
    loseCounter++; 
    else 
    tieCounter++;
    }
    message = "Win: " + winCounter + " Lose: " + loseCounter + " tie: " + tieCounter ;  
    console.log(message) ;  
}

game(); 
      