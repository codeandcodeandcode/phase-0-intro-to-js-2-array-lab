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

