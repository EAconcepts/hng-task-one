const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const currentDate = new Date()
const day = document.getElementById("day")
day.textContent =`${weekDays[currentDate.getDay()]} `
const time = document.getElementById("time")
function updateTime(){
    const currentTime = new Date();
    const timeString = currentTime.getTime();
    time.textContent =timeString 

}
updateTime()
setInterval(updateTime, 1000)