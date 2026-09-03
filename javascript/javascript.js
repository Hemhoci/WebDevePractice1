let myScript = document.getElementsByTagName('ul')[0];

let newItemList = document.createElement('li');
let newTextList = document.createTextNode('cream');
newItemList.appendChild(newTextList);
myScript.appendChild(newItemList);

let myScript2 = document.getElementsByTagName('li');
console.log(myScript2);