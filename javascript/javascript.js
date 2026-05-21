let myScript = document.getElementById("box1");
let myScriptMod = myScript.firstChild.nodeValue;
let myScriptMod2 = myScriptMod.replace('Fish & chips', 'Pizza');
myScript.firstChild.nodeValue = myScriptMod2;
console.log(myScript);
















