//Initialised the cat array
let cats = ["Milo", "Otis", "Garfield"];

//Created a function to add an element to the end
let destructivelyAppendCat = (name)=>{
    cats.push(name)   
}

//Created a function to insert an element at the start
let destructivelyPrependCat = (name)=>{
    cats.unshift(name);
}

// Created the destructivelyRemoveLastCat func 
let destructivelyRemoveLastCat = ()=>{
    cats.pop();
}

// Created a func destructivelyRemoveFirstCat
function destructivelyRemoveFirstCat(){
    cats.shift()
}

// Created a func appendCat 
function appendCat(name){
    let na = [];
     na.push(...cats, name)
     return na;
}
