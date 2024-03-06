let btns = document.querySelectorAll(".grid-item");
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");
const btn_4 = document.querySelector("#btn_4");
const btn_5 = document.querySelector("#btn_5");
const btn_6 = document.querySelector("#btn_6");
const btn_7 = document.querySelector("#btn_7");
const btn_8 = document.querySelector("#btn_8");
const btn_9 = document.querySelector("#btn_9");
const array = new Array();

let i = 1;
let count = 0;

for (btn of btns) {
    btn.addEventListener("click", function (event) {
        let text = event.target.innerText;
        if ((text != "x") && (text != "0")) {
            if (i % 2 == 0) {
                event.target.innerText = "0";
            } else {
                event.target.innerText = "x";
            }
            let txt = event.target.innerText;
            array.push(txt);
            i++;
            count++;
        
            if (count > 4) {
                winner();  // game logic
            }
        }
    })
}

// on new game button click
function newGame() {
    i = 1;
    count = 0;

    btns.forEach(function (button) {
        button.innerText = "_";
    });

    // empty array 
    array.splice(0, array.length);
    // array = [];
}



function winner() {
    //
    console.log("winner function execute");
    if(count<=9){
    // rows wise - 1st row
    if ((btn_1.innerText == "x" && btn_2.innerText == "x" && btn_3.innerText == "x") || (btn_1.innerText == "0" && btn_2.innerText == "0" && btn_3.innerText == "0")) {
        alert(`winner is ${btn_1.innerText}`);
    } // 2nd row
    else if ((btn_4.innerText == "x" && btn_5.innerText == "x" && btn_6.innerText == "x") || (btn_4.innerText == "0" && btn_5.innerText == "0" && btn_6.innerText == "0")) {
        alert(`winner is ${btn_4.innerText}`);
    } // 3rd row
    else if ((btn_7.innerText == "x" && btn_8.innerText == "x" && btn_9.innerText == "x") || (btn_7.innerText == "0" && btn_8.innerText == "0" && btn_9.innerText == "0")) {
        alert(`winner is ${btn_8.innerText}`);
    }
    // colns wise - 1st cols
    else if((btn_1.innerText == "x" && btn_4.innerText == "x" && btn_7.innerText=="x") || (btn_1.innerText == "0" && btn_4.innerText == "0" && btn_7.innerText=="0")){
        alert(`winner is ${btn_1.innerText}`);
    } // 2nd cols
    else if((btn_2.innerText == "x" && btn_5.innerText == "x" && btn_8.innerText=="x") || (btn_2.innerText == "0" && btn_5.innerText == "0" && btn_8.innerText=="0")){
        alert(`winner is ${btn_2.innerText}`);
    } // 3nd cols
    else if((btn_3.innerText == "x" && btn_6.innerText == "x" && btn_9.innerText=="x") || (btn_3.innerText == "0" && btn_6.innerText == "0" && btn_9.innerText=="0")){
        alert(`winner is ${btn_3.innerText}`);
    } // 1st : cross - section
    else if((btn_1.innerText == "x" && btn_5.innerText == "x" && btn_9.innerText=="x") || (btn_1.innerText == "0" && btn_5.innerText == "0" && btn_9.innerText=="0")){
        alert(`winner is ${btn_5.innerText}`);
    } // 2nd : cross - section
    else if((btn_3.innerText == "x" && btn_5.innerText == "x" && btn_7.innerText=="x") || (btn_3.innerText == "0" && btn_5.innerText == "0" && btn_7.innerText=="0")){
        alert(`winner is ${btn_5.innerText}`);
    } 
}// no winner

    else{
        alert("Game tie : No Winner!");
    } 
    
    


}
