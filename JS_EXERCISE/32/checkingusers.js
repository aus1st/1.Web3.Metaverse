

var current_users = ["Ahmed", "Sajid", "Admin", "Sara", "Faiz"];
var new_users = ["Ahmed", "Sajid", "Aliza", "Zimal", "Zoya"];


var msgs = [" is available", " had already been take, need to input new name"];

if (new_users != null && new_users.length > 0) {
    var f = null;
    new_users.forEach(u => {
        f = current_users.find((c) => {
            return c == u;
        });
        if (f != null) {
            console.log(u + msgs[1]);
        } else {
            console.log(u + msgs[0]);
        }
        f = null;
    });
}