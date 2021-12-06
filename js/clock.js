const showClock = () => {
    let date = new Date();
    let hr = hourFormat(date.getHours());
    let min = hourFormat(date.getMinutes());
    let sec = hourFormat(date.getSeconds());
    document.getElementById("hour").innerHTML = `${hr}:${min}:${sec}`;

    const monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfTheWeek = weekDays[date.getDay()];
    let day = date.getDate();
    let month = monthsOfTheYear[date.getMonth()];
    let textDate = `${dayOfTheWeek}, ${day} ${month}`
    document.getElementById("date").innerHTML = textDate;

    document.getElementById("container").classList.toggle("animate")
}

const hourFormat = (hour) =>{
    if(hour < 10){
        hour = "0" + hour;
    }
    return hour;
}

setInterval(showClock, 1000)