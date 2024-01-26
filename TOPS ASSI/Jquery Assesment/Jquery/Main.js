function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format time to ensure two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = timeString;
}

function updateDate() {
    var now = new Date();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = daysOfWeek[now.getDay()];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();

    var dateString = day + ', ' + month + ' ' + date + ', ' + year;
    document.getElementById('date').innerHTML = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Update the date once initially and then every 5 seconds
updateDate();
setInterval(updateDate, 5000);