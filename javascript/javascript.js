let myScript = document.getElementById("box1");
myScript.className = 'BigBox';
console.log(myScript.className);

let myScript2 = document.getElementsByTagName('li').item(2);
myScript2.setAttribute('class','Power');
console.log(myScript2);
let myScriptModified = document.querySelectorAll('li');
console.log(myScriptModified);
myScript2.removeAttribute('class');
console.log(myScript2);
myScript2.removeAttribute('id');
console.log(myScript2);