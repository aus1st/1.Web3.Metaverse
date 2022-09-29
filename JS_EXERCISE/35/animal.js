var animals = ["Dog","Horse","Pigeon"];
var sentence = "I like ";

for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
    
}


for (let index = 0; index < animals.length; index++) {
    if(animals[index]=="Dog"){
        console.log("Dog is loyal and friendly towards people");    
    } else if(animals[index]=="Horse"){
        console.log("Horse is extremly loyal animal and doesn't become anxious if left alone for while");  
    } else{
        console.log("Pigeon is innocent and loyal bird and would make a great ped"); 
    }
    
}
console.log("All above animals/bird(s) have loyality in Common\nhaving any of these would make a great ped");