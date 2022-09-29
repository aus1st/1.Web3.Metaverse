
function store_car_info(manu,mode,...args){
   var car = {manufac: manu,model: mode,...args};
   return car;
}

console.log(store_car_info("honda",2018,color="silver",otherFeature=true));
console.log(store_car_info("suzuki",2016,color="golden",otherFeature=true));
console.log(store_car_info("kia","2017"));