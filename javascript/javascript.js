let myScript = document.createElement('li');
let textScript = document.createTextNode('Hotdogs');
myScript.appendChild(textScript);
let scriptPosition = document.getElementsByTagName('ul')[0];
scriptPosition.appendChild(myScript);


let newScript = document.createElement('ol');
document.body.appendChild(newScript);
let newScriptChild = document.createElement('li');
let newText = document.createTextNode('pizza');
newScript.appendChild(newScriptChild);
newScriptChild.appendChild(newText);
console.log(newScript);
let scriptPosition2 = document.getElementsByTagName('ol')[0];
scriptPosition2.appendChild(newScript);









