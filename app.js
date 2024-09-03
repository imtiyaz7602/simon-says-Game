let btns=document.querySelectorAll(".btn");
for(let btn of btns){
    btn.addEventListener("click",function(){
       console.log(this);
    })
}
let gameSeq=[];
let userSeq=[];
let start=false;
let lvl=0;
let h2=document.querySelector("h2");
let btnColor=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(start===false){
        console.log("Game started ");
        start=true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function levelUp(){
    lvl++;
    userSeq=[];
    h2.innerText=`Level ${lvl}`;
    let randIdx=Math.floor(Math.random()*3);
    let randC=btnColor[randIdx];
    let rndbtn=document.querySelector(`.${randC}`);
    gameSeq.push(randC);
    console.log(gameSeq);
    btnFlash(rndbtn);
}
function check(indx){
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        // start=true;

        h2.innerText=`Game is over and your lvel was ${lvl}, press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },140);
        reset();
    }

}
function btnPress(){
    // console.log("Button was Pressed ");
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(let btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    lvl=0;
    gameSeq=[];
    userSeq=[];
}