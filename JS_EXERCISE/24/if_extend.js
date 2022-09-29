var car = "wagonr";
console.log("is car == 'wagonr'? I Predict True")
console.log(car=='wagonr');

console.log("car != 'swift'? I Predict True")
console.log(car!='swift');

console.log("car.toLowerCase() == 'wagonr'? I Predict True with lowercase")
console.log(car.toLowerCase()=='wagonr');

//Numerical Tests
var guess = 10;
console.log("is guess == 10? I Predict True");
console.log(guess==10);

console.log("is guess != 10? I Predict False");
console.log(guess!=10);

console.log("is guess > 5? I Predict True");
console.log(guess>5);

console.log("is guess < 10? I Predict False");
console.log(guess<10);

console.log("is guess >= 10? I Predict True");
console.log(guess>=10);

console.log("is guess <= 20? I Predict True");
console.log(guess<=20);

var obj = {Name:"Ahmed", Age:39};
console.log("obj.Name.toLowerCase() ===ahmed and obj.Age === 39? I Predict True");
console.log(obj.Name.toLowerCase() ==="ahmed" && obj.Age === 39 );

console.log("obj.Name.toLowerCase() !==ahmed OR obj.Age === 39? I Predict True");
console.log(obj.Name.toLowerCase() !=="ahmed" || obj.Age === 39 );

var search = ["alu","gobhi","bhindi","tamatar"];
var x = search.find((s)=>{
    return s == "gobhi";
});

if(x!=null){
    console.log(true);
}else{
    console.log(false);

}
