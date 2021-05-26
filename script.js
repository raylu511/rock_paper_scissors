let playerScore = 0 ;
let computerScore = 0 ;
const playerScore_span = document.getElementById("playerScore") ; 
const computerScore_span = document.getElementById("computerScore") ; 
const rock_choice = document.getElementById("rock") ; 
const paper_choice = document.getElementById("paper") ; 
const scissors_choice = document.getElementById("scissors") ; 
const results_p = document.querySelector(".results >p") ; 

function playerWin(playerChoice,computerChoice)
{
    playerScore++ ;
    playerScore_span.innerHTML = playerScore ;
    results_p.innerHTML= (playerChoice + " beats " + computerChoice + ". You win!!! ") ;
}
function playerLose(playerChoice,computerChoice)
{
    computerScore++ ; 
    computerScore_span.innerHTML= computerScore;
    results_p.innerHTML= (computerChoice + " beats " + playerChoice + ". You lost!!! ") ;
}
function draw()
{
    results_p.innerHTML = "It's a tie!" ; 

}
//Gets computer selection 
function getComputerChoice()
{
    randomGameValue = Math.floor(Math.random()*3) ; 
    
    if(randomGameValue==0) 
        return "rock" ; 
    else if(randomGameValue==1) 
        return "paper";
    else
        return "scissors";
}
function getPlayerChoice()
{
    rock_choice.addEventListener('click', function()
    {
        playRound("rock") 
    })

    paper_choice.addEventListener('click', function()
    {
        playRound("paper")
    })

    scissors_choice.addEventListener('click', function()
    {
        playRound("scissors"); 
    })
}

// Main game function 
function playRound(playerSelection)  
{
    const computerSelection = getComputerChoice() ; 
    if(playerSelection=="rock") 
    {
        if(computerSelection=="rock")
            draw() ; 
            
        else if(computerSelection=="paper")
            playerLose(playerSelection,computerSelection);

        else
            playerWin(playerSelection,computerSelection);
    }

    else if(playerSelection=="paper") 
    {
        if(computerSelection=="rock")
        playerWin(playerSelection,computerSelection);

        else if(computerSelection=="paper")
            draw() ; 

        else
        playerLose(playerSelection,computerSelection);

    }

    else
    {
        if(computerSelection=="rock")
        playerLose(playerSelection,computerSelection);


        else if(computerSelection=="paper")
        playerWin(playerSelection,computerSelection); 

        else
            draw() ; 
    }
}

getPlayerChoice() ; 

