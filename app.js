let buttons=document.querySelectorAll(".btn");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container")
let turnO=true;
let newGame=document.querySelector(".new-game");
let resetGame=document.querySelector(".reset-game");
const winPos=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count=0;
const checkWinner=()=>{
    for(let pos of winPos){
     let pos1val=buttons[pos[0]].innerText;
     let pos2val=buttons[pos[1]].innerText;
     let pos3val=buttons[pos[2]].innerText;
     if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
            msgContainer.innerText=`Winner is ${pos1val}`;
        msg.classList.remove("hide");
        for(let btn of buttons){
            btn.disabled=true;
        }
         return true;
        }
     }
    }
 };
buttons.forEach((btn)=>{
   btn.addEventListener("click",()=>{
     if(turnO){
        btn.innerText="O";
       turnO=false;
       count++;
     }
     else{
        btn.innerText="X";
        turnO=true;
        count++;
     }
     btn.disabled=true;
     let isWinner=checkWinner();
     if(count==9 && !isWinner){
       msg.classList.remove("hide");
       msgContainer.innerText="The match has been drawn";
     }
   });
});
const restart=()=>{
    for(let btn of buttons){
        btn.disabled=false;
        btn.innerText="";
    }
    count=0;
    turnO=true;
    msg.classList.add("hide");
}
newGame.addEventListener("click",restart);
resetGame.addEventListener("click",restart);
