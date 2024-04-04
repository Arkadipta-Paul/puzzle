var rows = 5;
var columns = 5;
var currTile;
var otherTile;
var turns = 0;
var puzzle;

let c = Math.floor(Math.random() * 3);
if (c == 0) {
    puzzle = "endGame";
} else if (c == 1) {
    puzzle = "endGame+";
}else {
    puzzle = "ironMan"
}
window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.src = "./" + puzzle + "/white.png";
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            document.getElementById("board").append(tile);
        }
    }

    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString());
    }
    pieces.reverse();
    for (let i=0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;

    }
    for (let i=0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./" + puzzle + "/" + pieces[i] + ".jpg";
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);
        document.getElementById("pieces").append(tile);
    }
}

    function dragStart() {
        currTile = this;
    }
    
    function dragOver(e) {
        e.preventDefault();
    }
    
    function dragEnter(e) {
        e.preventDefault();
    }
    
    function dragLeave() {
    
    }
    
    function dragDrop() {
        otherTile = this;
    }
    
    function dragEnd() {
        if (currTile.src.includes("white")) {
            return;
        }

        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }