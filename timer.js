const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 10);

function startCountdown() {
    let currentTime = new Date().getTime();
    let timeRemaining = endDate.getTime() - currentTime;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " " +  " " + "days" ;
    document.getElementById("hours").innerHTML = hours + " " +  " " + "hours";
    document.getElementById("minutes").innerHTML = minutes + " " +  " " + "mins";
    document.getElementById("seconds").innerHTML = seconds + " " +  " " + "secs";

    if (timeRemaining < 0) {
        startDate.setDate(startDate.getDate() + 10);
        endDate.setDate(startDate.getDate() + 10);

        setTimeout(startCountdown, 1000);
    } else {
        setTimeout(startCountdown, 1000);
    }
}

startCountdown();