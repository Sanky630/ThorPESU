var string = "#race Haya";
var array = string.split("");
var interval = 1500; // Set the interval in milliseconds (1000 ms = 1 second)
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("body-p").innerHTML += array.shift();
    } else {
        clearInterval(timer); // Clear the interval to stop the animation
        setTimeout(startAnimation, interval); // Start the animation again after the specified interval
    }
}

function startAnimation() {
    array = string.split(""); // Reset the array
    document.getElementById("body-p").innerHTML = ""; // Clear the content
    timer = setInterval(frameLooper, 50); // Start the animation loop
}

startAnimation(); // Start the animation initially