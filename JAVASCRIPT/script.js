(function(){

    const domManipulation=(function(){
        //Dom elements
        //used
        const buttonRules=document.getElementById("rules-button");
        const modalRules=document.getElementById("rules-modal");
        const closeRules=document.getElementById("rules-close");
        const choiceRock=document.getElementById("input-rock");
        const choicePaper=document.getElementById("input-paper");
        const choiceScissors=document.getElementById("input-scissors");
        const scoreDisplay=document.getElementById("game-score");
        const computerChoiceDisplay=document.getElementById("computer-choice");
        const computerChoiceIcon=document.getElementById("computer-choice-icon");
        const playerChoiceDisplay=document.getElementById("player-choice");
        const playerChoiceIcon=document.getElementById("player-choice-icon");
        const roundDisplay=document.getElementById("result-display");
        const inputBoard=document.getElementById("input-board");
        const newRoundButton=document.getElementById("new-round");
        const resultText=document.getElementById("result-text");
        //Initialize Dom
        function InitDom(){
            _AddEventListeners();
        }
        //Dom manipulations
        function _AddEventListeners(){
            //opening the rules popup
            buttonRules.addEventListener("click",()=>{
                modalRules.showModal();
            })
            closeRules.addEventListener("click",()=>{
                modalRules.close();
            })
            //playing the game
            choiceRock.addEventListener("click",()=>{
                game.PlayRound("rock");
            })
            choicePaper.addEventListener("click",()=>{
                game.PlayRound("paper");
            })
            choiceScissors.addEventListener("click",()=>{
                game.PlayRound("scissors");
            })
            newRoundButton.addEventListener("click",()=>{
                _StartNewRound();
            })
        }
        function _DisplayScore(){
            scoreDisplay.textContent=game.GetScore();
        }
        function DisplayRoundResult(){
            inputBoard.style.display="none";
            _DisplayResultIcons();
            _DisplayScore();
            roundDisplay.style.display="flex";
            switch(game.GetRoundResult()){
                case 0:
                    resultText.textContent="TIE";
                    break;
                case 1:
                    resultText.textContent="YOU WIN";
                    break;
                case -1:
                    resultText.textContent="YOU LOSE";
                    break;
            }
        }
        function _DisplayResultIcons(){
            //player Display
            playerChoiceDisplay.classList="choice-output " + game.GetPlayerChoice();
            playerChoiceIcon.src = "../CSS/Images/icon-"+game.GetPlayerChoice()+".svg";
            //computer Display
            computerChoiceDisplay.classList="choice-output " + game.GetComputerChoice();
            computerChoiceIcon.src = "../CSS/Images/icon-"+game.GetComputerChoice()+".svg";
        }
        function _StartNewRound(){
            inputBoard.style.display="flex";
            roundDisplay.style.display="none"
        }
        return{
            InitDom,
            DisplayRoundResult
        }
    })();
    
    const game=(function(){
        //game variables
        let playerChoice=null;
        let computerChoice=null;
        let score=0;
        let roundResult=null;
        //SETTERS
        function PlayRound(choice){
            playerChoice=choice;
            computerChoice=_GetRandomChoice();
            roundResult=_GetWinner(0);
            score+=roundResult;
            domManipulation.DisplayRoundResult();
        }
        //GETTERS
        function GetPlayerChoice(){
            return playerChoice;
        }
        function GetComputerChoice(){
            return computerChoice;
        }
        function GetScore(){
            return score;
        }
        function GetRoundResult(){
            return roundResult;
        }
        //GAME FUNCTION
        function ResetScore(){
            score=0;
        }
        function _GetWinner(){
            if(playerChoice!=null & computerChoice!=null){
                if(playerChoice==computerChoice){
                    return 0;
                }else if((playerChoice=="rock" & computerChoice=="scissors")|(playerChoice=="scissors" & computerChoice=="paper")|(playerChoice=="paper" & computerChoice=="rock")){
                        return 1;
                    }else{
                        return -1;
                    }
            }
            return 69;
        }
        function _GetRandomChoice() {
            const min = 1;
            const max = 3;
            let result = Math.floor(Math.random() * (max - min + 1)) + min;
            switch(result){
                case 1: return "rock";
                case 2: return "paper";
                case 3: return "scissors";
            }
        }

        return{
            GetPlayerChoice,
            GetComputerChoice,
            GetScore,
            GetRoundResult,
            PlayRound,
            ResetScore,
        }
    })();

    //INITIALIZING
    domManipulation.InitDom();

})();