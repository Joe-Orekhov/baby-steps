document.getElementById(`bear`);

function bearGoLeft(){
const leftNum = bear.style.left.replace("px", "");
const left = parseInt(leftNum, 10);

if (left > 10) {
    bear.style.left = `${left - 3}px`;
}
}    

function bearGoRight(){
    const rightNum = bear.style.left.replace("px", "");
    const right = parseInt(rightNum, 10);
    
if (right > 0) {
        bear.style.left = `${right + 3}px`;
}
}

function bearGoUp(){
    const upNum = bear.style.bottom.replace("px", "");
    const up = parseInt(upNum, 10);
    
if (up > 0) {
        bear.style.bottom = `${up + 3}px`;
}
}

function bearGoDown(){
    const downNum = bear.style.bottom.replace("px", "");
    const down = parseInt(downNum, 10);
    
if (down > 0) {
        bear.style.bottom = `${down - 3}px`;
}
}

    document.onkeydown = function(event) {
        switch (event.keyCode) {
           case 37:
                bearGoLeft();
              break;
           case 38:
                bearGoUp();
              break;
           case 39:
                bearGoRight();
              break;
           case 40:
                bearGoDown();
              break;
        }
    };

