
function timer(){
    var timeLeft = 30;
    var elem = document.getElementById('some_div');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft ==-1  ) {
            return ("Out of time!");
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
}
