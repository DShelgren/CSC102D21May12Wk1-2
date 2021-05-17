//Wk1-2 countdown timer should run 10....1 then blastoff

//Start function definition of startCountdown
function startCountdown() {
    //Define variable named count and assign value of 10
    var count = 10;

    //Set link and reference of count to HTML's countdownTimer
    //the countdown timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1; //decrement count value by one

    //Run included function at delay of 1 second
    setTimeout(function () {
        //the countdown timer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 1000); //set timer value to 1000ms/1 second


    //Run included function at delay of 2 second
    setTimeout(function () {
        //the countdown timer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 2000); //set timer value to 2000ms/2 second

    //Run included function at delay of 3 second
    setTimeout(function () {
        //the countdown timer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 3000); //set timer value to 3000ms/3 second

    //Run included function at delay of 4 second
    setTimeout(function () {
        //the countdown timer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 4000); //set timer value to 4000ms/4 second


    //Run included function at delay of 5 second
    setTimeout(function () {
        //the countdown timer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 5000); //set timer value to 5000ms/5 second

    //Run included function at delay of 6 second
    setTimeout(function () {
        //the countdown timer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 6000); //set timer value to 6000ms/6 second

    //Run included function at delay of 7 second
    setTimeout(function () {
        //the countdown timer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 7000); //set timer value to 7000ms/7 second

    //Run included function at delay of 8 second
    setTimeout(function () {
        //the countdown timer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 8000); //set timer value to 8000ms/8 second

    //Run included function at delay of 9 second
    setTimeout(function () {
        //the countdown timer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 9000); //set timer value to 9000ms/9 second

    //Run included function at delay of 10 second
    setTimeout(function () {
        //final part of countdown, no decrement required, display Blastoff
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
    }, 10000); //set timer value to 10000ms/10 second


}