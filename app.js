const game = ()=>{
    let pscore = 0;
    let cscore = 0;
    const start = () =>{
        const startgame = document.querySelector(".intro button");
        const display = document.querySelector(".intro")
        const match = document.querySelector(".match");
        startgame.addEventListener("click",()=>{
            display.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };
    const playmatch = () =>{
        const options = document.querySelectorAll(".option button");
        const playerhand = document.querySelector(".player-hand");
        const computerhand = document.querySelector(".computer-hand");

        const computeroption = ["rock","paper","scissors"];

        options.forEach(option =>{
            option.addEventListener("click",function() {
                const computerNumber = Math.floor(Math.random()*3);
                const computerchoice =  computeroption[computerNumber];
                compare(this.textContent,computerchoice);
                playerhand.src = `./images/${this.textContent}.png`
                computerhand.src = `./images/${computerchoice}.png`
            });
        });

    }
    const compare = (playerchoice,computerchoice) =>{
        const winner = document.querySelector(".winner");
        if(playerchoice===computerchoice){
            winner.textContent = "It's a tie";
            updatescore(pscore,cscore);
            return;
        }
        else if(playerchoice==="rock"){
            if(computerchoice==="scissors")
            {
                winner.textContent = "You Wins";
                pscore = pscore + 1;
                updatescore(pscore,cscore);
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cscore = cscore + 1;
                updatescore(pscore,cscore);
                return;
            }
        }
        else if(playerchoice==="paper"){
            if(computerchoice==="scissors")
            {
                winner.textContent = "Computer Wins";
                cscore = cscore + 1;
                updatescore(pscore,cscore);
                return;
            }
            else{
                winner.textContent = "You Wins";
                pscore = pscore + 1;
                updatescore(pscore,cscore);
                return;
            }
        }
        else if(playerchoice==="scissors"){
            if(computerchoice==="paper")
            {
                winner.textContent = "You Wins";
                pscore = pscore + 1;
                updatescore(pscore,cscore);
                return;
            }
            else{
                winner.textContent = "Computer Wins";
                cscore = cscore + 1;
                updatescore(pscore,cscore);
                return;
            }
        }
    }
    const updatescore = (pscore,cscore)=>{
        const playerscore = document.querySelector(".player-score p")
        const computerscore = document.querySelector(".computer-score p")
        playerscore.textContent = pscore;
        computerscore.textContent = cscore;

    }

    start();
    playmatch();

};
game();