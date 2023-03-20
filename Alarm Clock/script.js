const currentTime = document.querySelector("h1");
const content = document.querySelector(".content");
const select = document.querySelectorAll("select");
const button = document.querySelector("button");

let alarmTime, isAlarmSet, ringtone = new Audio("./files/ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i
    let option = `<option value="${i}">${i}</option>`;
    select[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i
    let option = `<option value="${i}">${i}</option>`;
    select[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM"
    let option = `<option value="${ampm}">${ampm}</option>`;
    select[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    let ampm = "AM"

    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }

    h = h = 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`
    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
})

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = ""
        ringtone.pause();
        content.classList.remove("disable");
        button.innerText = "Set Alarm"
        return isAlarmSet = false
    }
    let time = `${select[0].value}:${select[1].value} ${select[2].value}`
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please select valid time to set alarm!");
    }

    alarmTime = time;
    isAlarmSet = true
    content.classList.add("disable");
    button.innerText = "Clear Alarm"


    console.log(time);
}

button.addEventListener("click", setAlarm);