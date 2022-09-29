
var userNames =[];
var msgs = [" would you like to see a status report?", " Thanks for Logging in"];

if(userNames!=null && userNames.length > 0){

userNames.forEach(u=>{
    if(u.toLowerCase()=="admin"){
        console.log("Hello "+u+ msgs[0]);
    } else{
        console.log("Hello "+u+ msgs[1]);
    }
    
    });
    

} else{
    console.log("We need to find some users!");
}

userNames = ["Ahmed", "Sajid", "Admin","Sara","Faiz"];
console.log("Now users accessing the website");

if(userNames!=null && userNames.length > 0){

    userNames.forEach(u=>{
        if(u.toLowerCase()=="admin"){
            console.log("Hello "+u+ msgs[0]);
        } else{
            console.log("Hello "+u+ msgs[1]);
        }
        
        });
        
    
    } else{
        console.log("No User Exist");
    }