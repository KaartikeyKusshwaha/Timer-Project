var isPaused = false;
var hours = 0;
var minutes = 0;
var seconds = 0;
var interval = null;

// START / RESUME
$("#start").click(function () {
    if (!interval) {
        interval = setInterval(function () { // Avoids multiple intervals
            if (!isPaused) {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
                var strHour = String(hours).padStart(2, '0');
                var strMinutes = String(minutes).padStart(2, '0');
                var strSeconds = String(seconds).padStart(2, '0');
                $("#display").text(strHour + ":" + strMinutes + ":" + strSeconds);
            }
        }, 1000);
    }
    isPaused = false; // Resume if paused
});

// PAUSE
$("#pause").click(function () {
    isPaused = true;
});

// RESET
$("#reset").click(function () {
    clearInterval(interval);
    interval = null;
    isPaused = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    $("#display").text("00:00:00");
});
