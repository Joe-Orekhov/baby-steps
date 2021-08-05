document.getElementById(`bear`);

function bearGoLeft(){
const leftNum = bear.style.left.replace("px", "");
const left = parseInt(leftNum, 10);

if (left > 0) {
    bear.style.left = `${left - 3}px`;
}
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        bearGoLeft();
    }
});

document.getElementById(`bear`);

function bearGoRight(){
    const rightNum = bear.style.left.replace("px", "");
    const right = parseInt(rightNum, 10);
    
if (right > 0) {
        bear.style.left = `${right + 3}px`;
}
}
    
document.addEventListener("keydown", function(e) {
     if (e.key === "ArrowRight") {
            bearGoRight();
    }
});

document.getElementById(`bear`);

function bearGoUp(){
    const upNum = bear.style.top.replace("px", "");
    const up = parseInt(upNum, 10);
    
if (up > 0) {
        bear.style.top = `${up + 3}px`;
}
}
    
document.addEventListener("keydown", function(e) {
     if (e.key === "ArrowUp") {
            bearGoUp();
    }
});