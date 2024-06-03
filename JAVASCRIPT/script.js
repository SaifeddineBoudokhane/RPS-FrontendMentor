(function(){

    const domManipulation=(function(){
        //Dom elements
        //used
        const buttonRules=document.getElementById("rules-button");
        const modalRules=document.getElementById("rules-modal");
        const closeRules=document.getElementById("rules-close");
        const choiceRock=document.getElementById("rock");
        const choicePaper=document.getElementById("paper");
        const choiceScissors=document.getElementById("scissors");
        const scoreDisplay=document.getElementById("game-score");
        //not used yet
        const choicesBoard=document.getElementById("choices");
        //Initialize Dom
        function InitDom(){
            _AddEventListeners();
            DisplayScore();
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
        }
        function DisplayScore(){
            scoreDisplay.textContent=game.GetScore();
        }
        return{
            InitDom,
            DisplayScore
        }
    })();
    
    const game=(function(){
        //game variables
        let playerChoice=null;
        let computerChoice=null;
        let score=0;
        //SETTERS
        function PlayRound(choice){
            playerChoice=choice;
            computerChoice=_GetRandomChoice();
            score+=_GetWinner();
            domManipulation.DisplayScore();
        }
        //GETTERS
        function GetPlayerChoice(){
            return playerChoice;
        }
        function GetComputerChoice(){
            return playerChoice;
        }
        function GetScore(){
            return score;
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
            PlayRound,
            ResetScore,
        }
    })();

    //INITIALIZING
    domManipulation.InitDom();

})();