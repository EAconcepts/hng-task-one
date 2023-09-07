const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const currentDate = new Date()
const day = document.getElementById("day")
day.textContent =`${weekDays[currentDate.getDay()]}, `
const time = document.getElementById("time")
function updateTime(){
    const date = new Date()
 time.textContent =date.toISOString()
}

setInterval(updateTime(), 1000)