var ord = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ord.forEach(n => {
    if (n == 1) {
        console.log(n + "st");
    } else if (n == 2) {
        console.log(n + "nd");
    }
    else if (n == 3) {
        console.log(n + "rd");
    } else {

        console.log(n + "th");

    }

});