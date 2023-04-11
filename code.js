//Question 1
function addnum (numToAdd){
    return function(num){
        return num + numToAdd;
    }
}

let add5 = addnum(5);
let result = add5(15);
console.log(result);

//Question 2
function findVal(key,arr,x=0){
  var y=x++;
  var arr2=arr.slice(x);
  if(arr[0]===key && arr.length != 0){
      return true;
  }else if(arr.length===0){return false;}
  return findVal(key,arr2,y++);
}



var arr = [12,61,36,59,81,20,50];
console.log(findVal(12,arr));

//Question 3 

//Option 1
function createPara(myString){
  let myDiv = document.getElementById("addPara");
  myDiv.style.position = "absolute";
  myDiv.style.bottom = "0px";
  myDiv.style.fontSize = "30px";

  myDiv.innerHTML = `<p><b>${myString}</b></p>`;
}

createPara("hi this is new para");

//OPtion 2
function createNewPara(mystring){

  let newPara = document.createElement("p");
  newPara.append(`${mystring}`)
  newPara.style.position = "absolute";
  newPara.style.bottom = "0px";
  newPara.style.padding = "30px"
  newPara.style.width = "500px"
  let myDiv = document.getElementById("addPara");
  myDiv.append(newPara)
}

createNewPara("This is alternative way to add para!")



createNewPara("This is alternative way to add para!")

//Question 4

function addListItem(myString){

  let ul = document.getElementById("list");
  let newli = document.createElement("li");
  newli.appendChild(document.createTextNode(`${myString}`));
  //newli.innerText = `${myString}`
  newli.setAttribute("id","3");
  ul.appendChild(newli);
}

addListItem("Mango");
//Question 5

//Doing it by giving Element name
function changeBackgroundColor(element, color) {
   
  if (!element || !color) {
    console.error("Element and color are not provided or invalid.");
    return;
  }
  let changeElement = document.querySelector(`${element}`);
  changeElement.style.backgroundColor = color;
}

changeBackgroundColor("div","blue");

//Doing it by Giving ID name
function changeBackgroundColorByID(elementId, color) {
 
  if (!elementId || !color) {
    console.error("Element and color are not provided or invalid.");
    return;
  }
  let changeElement = document.getElementById(`${elementId}`);
  changeElement.style.backgroundColor = color;
}

changeBackgroundColorByID("addPara","gray");

//Question 6
// I clear local storage because ther eso many object so hard to access specific key.
localStorage.clear();
function saveToLocalStorage(key,obj){
    if (!key || !obj) {
        console.error("Key and object are not entered or Invalid.");
        return;
    }
    const stringJson = JSON.stringify(obj);
    localStorage.setItem(key,stringJson);
}

const profile = {name : "Farzaam", age : "20", occupation : "student"};

saveToLocalStorage("myInfo",profile);

//Question 7
localStorage.clear();
function getFromLocalStorage(key){
    const dataJson = localStorage.getItem(key);
    if(!dataJson){
        console.error("No data found of key : " + key);
    } 
    const data = JSON.parse(dataJson);
    return data;
}

let myinfo = getFromLocalStorage("myInfo");
console.log(myinfo);

//Question 8

localStorage.clear();
let profile = {
    name : "Farzaam",
    age : 20,
    profession : "student"
}

function saveToLocalStorageAsIndiviual(obj){
    if (typeof obj !== 'object' || obj === null) {
       console.error('Invalid Object!');
    }
    for(let item in obj){
        localStorage.setItem(item,JSON.stringify(obj[item]));
    }
    
    const newObj = {};
    for (let x = 0; x < localStorage.length; x++){
        const key = localStorage.key(x);
        newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
}




let newProfile = saveToLocalStorageAsIndiviual(profile);
console.log(newProfile);

