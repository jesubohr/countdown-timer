let [seconds, minutes, hours, days] = [0, 0, 0, 0];
const styleTag = document.createElement('style');

setInterval(() => {
   Timer('.timer')
}, 999);

document.querySelector('head').append(styleTag);


function Timer(element) {
   styleTag.innerHTML = `main .countdown .timer.seconds::before{content: '${seconds}';}\n`
   styleTag.innerHTML += `main .countdown .timer.minutes::before{content: '${minutes}';}\n`
   styleTag.innerHTML += `main .countdown .timer.hours::before{content: '${hours}';}\n`
   styleTag.innerHTML += `main .countdown .timer.days::before{content: '${days}';}\n\n`
   
   styleTag.innerHTML += `main .countdown .timer.seconds::after{content: '${seconds}';}\n`
   styleTag.innerHTML += `main .countdown .timer.minutes::after{content: '${minutes}';}\n`
   styleTag.innerHTML += `main .countdown .timer.hours::after{content: '${hours}';}\n`
   styleTag.innerHTML += `main .countdown .timer.days::after{content: '${days}';}\n\n`

   seconds++;
   if(seconds == 60) {minutes++; seconds = 0}
   if(minutes == 60) {hours++; minutes = 0}
   if(hours == 24) {days++; hours = 0}

   console.log(element)
}

