var messages = ["My dear "," you are still invited for Dinner with me on 28/09/2022 at Move n Pick "];
var sorryMsg = ["My dear "," sorry, as table won't arrive in time, i can't invite you on dinner"];

var guests = [];
guests.push("Dada");
guests.push("Pappa");
guests.push("Moin Chacha");
guests.push("Qamar Chacha");


var notComing = guests.splice(2,1);
guests.splice(2,0,"Naeem Chacha");


guests.unshift("Aliza");
guests.push("Anaya");
guests.splice(Math.ceil(guests.length)/2,0,"Zimal");


console.log("Sorry, as table won't arrive in time, therefore i can invite 2 peoples");


var arrayLngth = guests.length-2;
for (let index = 0; index < arrayLngth; index++) {

    console.log(sorryMsg[0]+guests.pop()+sorryMsg[1]);   
   
}

//print msg 
guests.forEach(e=>{
    console.log(messages[0]+e+messages[1]); 
});

//removing last 2 elements and print empty list/array
guests = [];
console.log(guests.length);




