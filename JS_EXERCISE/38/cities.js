function describe_city(cityName,Country='Pakistan'){

   if(Country.toLowerCase()=='pakistan'){
    console.log(cityName+ " is in "+Country);
   } else if (Country.toLowerCase()!='pakistan') {
    console.log(cityName+ " is not in Pakistan");
   }
}

describe_city("Karachi","Pakistan");
describe_city("Lahore","Pakistan");
describe_city("London","UK");
