let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("Button Clicked");
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return;
            }
        }
    }
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
});

newGameBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
});