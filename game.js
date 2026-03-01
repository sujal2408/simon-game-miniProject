let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","blue","green","brown"];


document.addEventListener("keypress",function(){
    if(started==false){
        console.log(("game started"));
        started=true;
        levelup();
    }
});
function btnflash(button){
    button.classList.add("flash");
    setTimeout(function(){
        button.classList.remove("flash");
    },250);
}

function userflash(button){
    button.classList.add("userflash");
    setTimeout(function(){
        button.classList.remove("userflash");
    },250);
}

function levelup() {
    level++;
    userseq = []; // reset user input each level
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 4);
    let randcol = btns[randidx];
    let randtbn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    btnflash(randtbn);
}
function btnpress(){
    let butt = this;
    userflash(butt);

    let usercolor = butt.classList[1]; // "red", "blue", etc.
    userseq.push(usercolor);

    let idx = userseq.length - 1;
    if(userseq[idx] !== gameseq[idx]){
        // wrong button
        h2.innerText = "you pressed the wrong key Game Over! Press any key to restart.";
        reset();
        return;
    }

    if(userseq.length === gameseq.length){
        setTimeout(levelup, 1000); // completed the round, go to next level
    }
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
let allbtns=document.querySelectorAll(".button");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
