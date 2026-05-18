let myScript = document.getElementsByClassName("boxes");
for (let i = myScript.length - 1; i >= 0; i--) {
    let myChecker = myScript[i].className = "newBoxes";
    console.log(myChecker);
}