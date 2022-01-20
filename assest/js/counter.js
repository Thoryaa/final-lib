//باعتبار العرض لمدة 3 ايام
let countdown = () => {
    const upperTime = new Date('jan 21,2022 12:10:10').getTime();
    const currentTime = new Date().getTime();
    const diftime = upperTime - currentTime;
    const second = 1000;
    const minutes = 60000;
    const hours = minutes * 60;
    const days = hours * 24;
    const remainday = Math.floor(diftime / days);
    const remainhour = Math.floor((diftime % days) / hours);
    const remainsecond = Math.floor((diftime % hours) / minutes);
    const remainminute = Math.floor((diftime % minutes) / second);

    document.getElementById('days').innerHTML = remainday;
    document.getElementById('hours').innerHTML = remainhour;
    document.getElementById('seconds').innerHTML = remainminute;
    document.getElementById('minutes').innerHTML = remainsecond;
}
setInterval(countdown, 1000);