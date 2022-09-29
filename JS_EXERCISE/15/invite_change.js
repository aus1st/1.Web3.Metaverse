var messages = ["My dear "," you are invited for Dinner with me on 28/09/2022 at Move n Pick "];

var guests = [];
guests.push("Dada");
guests.push("Pappa");
guests.push("Moin Chacha");
guests.push("Qamar Chacha");

var notComing = guests.splice(2,1);
guests.splice(2,0,"Naeem Chacha");

guests.forEach(e => {
    console.log(messages[0]+e+messages[1]); 
});

console.log(notComing+" is not coming");
