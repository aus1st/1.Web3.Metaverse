var magicians = ["M1","M2","M3","M4"];
var chang = [];

function make_great(mgns){

   mgns.forEach(e=>{
     chang.push("The Great "+e);
   })

}


function show_magicians(m){
   
   m.forEach(element => {
      console.log(element);
   });

}

make_great(magicians);

//after changes
show_magicians(chang);
