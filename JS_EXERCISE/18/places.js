var places = ["China","Hong Kong","Dubai","Sharjah","Oman"];

var orderby = places;
//print in original order
console.log("---original---");
places.forEach(p=>{
    console.log(p); 
});

//print in alphabetical order
orderby.sort();
console.log("---Order by asc---");
orderby.forEach(p=>{
    console.log(p); 
});

console.log("---original---");
places.forEach(p=>{
    console.log(p); 
});

var reverse = places;
//print in reverse order
reverse.reverse();
console.log("---Order by desc---");
reverse.forEach(p=>{
    console.log(p); 
});

//print in normal order

console.log("---original---");
places.forEach(p=>{
    console.log(p); 
});
