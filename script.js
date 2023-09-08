const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const currentDate = new Date()
const day = document.getElementById("day")
day.textContent =`${weekDays[currentDate.getDay()]}, `
const time = document.getElementById("time")
function updateTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM' 
    const utcTime = currentTime.getTime().toString()
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${amPm} | ${utcTime} `;
    time.textContent =timeString 

}
updateTime()
setInterval(updateTime, 1000)