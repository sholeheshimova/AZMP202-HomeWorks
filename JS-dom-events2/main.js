let countdownInterval;

document.getElementById("start-button").addEventListener("click", function(){
    
    let timeLeft = parseInt(document.getElementById("time-input").value);


    document.getElementsByClassName("display").innerHTML = timeLeft ;
    countdownInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            document.getElementById("display").innerHTML = timeLeft ;
        }else {
            clearInterval(countdownInterval);
            document.getElementById("dipslay").innerHTML = "Finish Time";
        }
    } , 1000);
})