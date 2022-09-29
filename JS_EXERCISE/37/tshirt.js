function make_tshirt(print,size='Large'){

    if(size.toLowerCase()=="medium"|| size.toLowerCase()=="large"){
     console.log("Message: I love Javascript"+" Size: "+size);
    } else{
     console.log("Message: "+print+" Size: "+size);
    }
  
 }
 
 make_tshirt("Pakistan","small");
 make_tshirt("Pakistan","medium");
 
 

