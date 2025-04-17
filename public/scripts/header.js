
loadPage();

function loadPage() {
    const date = document.getElementById("date")
    const time = document.getElementById("time")
    const values = getCurrentDate();
    date.innerText = values[0];
    time.innerText = values[1];

    setInterval(() => {
        changeTime();
    }, 1000);
}

function changeTime() {
    const date = document.getElementById("date")
    const time = document.getElementById("time")
    const values = getCurrentDate();
    date.innerText = values[0];
    time.innerText = values[1];
}

function getCurrentDate() {
    let date = new Date;

    let day = date.getDate();

    let month = date.getMonth();
    switch(month) {
        case 0:
            month = "Jan";
        break;
        case 1:
            month = "Feb";
        break;
        case 2:
            month = "Mar";
        break;
        case 3:
            month = "Apr";
        break;
        case 4:
            month = "May";
        break;
        case 5:
            month = "Jun";
        break;
        case 6:
            month = "Jul";
        break;
        case 7:
            month = "Aug";
        break;
        case 8:
            month = "Sep";
        break;
        case 9:
            month = "Oct";
        break;
        case 10:
            month = "Nov";
        break;
        case 11:
            month = "Dec";
        break;
        default:
            console.error("Invalid month generated in getCurrentDate()");
    }

    let weekday = date.getDay();
    switch(weekday) {
        case 0:
            weekday = "Sun";
        break;
        case 1:
            weekday = "Mon";
        break;
        case 2:
            weekday = "Tue";
        break;
        case 3:
            weekday = "Wed";
        break;
        case 4:
            weekday = "Thu";
        break;
        case 5:
            weekday = "Fri";
        break;
        case 6:
            weekday = "Sat";
        break;
        default:
            console.error("Invalid weekday generated in getCurrentDate()");
    }

    let year= date.getFullYear();

    let hour = date.getHours();
    let postfix;

    if (hour > 12 ) {
        hour = hour-12;
        postfix = "PM"
    } else {
        postfix = "AM"
    }

    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    
    return [`${weekday} ${month} ${day} ${year} `, `${formatTwoDigits(hour)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)} ${postfix}`]
}

function formatTwoDigits(num) {
    return String(num).padStart(2, "0");
}