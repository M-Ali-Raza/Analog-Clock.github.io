setInterval(() => {
    let d=new Date();
    let hourTime=d.getHours();
    let minuteTime=d.getMinutes();
    let secondTime=d.getSeconds();
    let hourMath=(30*hourTime)+(minuteTime/2);
    let minuteMath=6*minuteTime;
    let secondMath=6*secondTime;
    hour.style.transform=`rotate(${hourMath}deg)`;
    minute.style.transform=`rotate(${minuteMath}deg)`;
    second.style.transform=`rotate(${secondMath}deg)`;
}, 1000);