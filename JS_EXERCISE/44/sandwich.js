function orderSandwich(...desiredItems){
   //console.log("Pls. prepare Sandwich with following");
   desiredItems.forEach(s=>{
      console.log(s);
   });
}

orderSandwich();
orderSandwich(["Crunchy Bread","Egg","Kabab","Ketchup"]);
orderSandwich(["Round Bread","Egg","Kabab","Masala","Ketchup", "Pepsi"]);