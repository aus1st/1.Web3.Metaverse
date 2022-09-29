
var userNames = ["Ahmed", "Sajid", "Admin","Sara","Faiz"];
var msgs = [" would you like to see a status report?", " Thanks for Logging in"];

userNames.forEach(u=>{
if(u.toLowerCase()=="admin"){
    console.log("Hello "+u+ msgs[0]);
} else{
    console.log("Hello "+u+ msgs[1]);
}

});
