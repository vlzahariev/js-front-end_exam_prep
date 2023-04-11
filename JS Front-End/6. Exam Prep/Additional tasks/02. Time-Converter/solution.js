function attachEventsListeners() {

    const buttons = {
        daysBtn: document.getElementById('daysBtn'),
        hoursBtn: document.getElementById('hoursBtn'),
        minutesBtn: document.getElementById('minutesBtn'),
        secondsBtn: document.getElementById('secondsBtn')
    }

    const inputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    }

    buttons.daysBtn.addEventListener('click', daysHandler);
    buttons.hoursBtn.addEventListener('click', hoursHandler);
    buttons.minutesBtn.addEventListener('click', minutesHandler);
    buttons.secondsBtn.addEventListener('click', secondsHandler);

    function daysHandler() {
        let currentValue = Number(inputs.day.value);
        let hours = currentValue * 24;
        let minutes = currentValue * 24 * 60;
        let seconds = currentValue * 24 * 60 * 60;
        
        inputs.hours.value = hours;
        inputs.minutes.value = minutes;
        inputs.seconds.value = seconds;
    }

    function hoursHandler() {
        let currentValue = Number(inputs.hours.value);
        let days = currentValue / 24;
        let minutes = currentValue * 60;
        let seconds = currentValue * 60 * 60;
        
        inputs.days.value = days;
        inputs.minutes.value = minutes;
        inputs.seconds.value = seconds;
    }

    function minutesHandler() {
        let currentValue = Number(inputs.minutes.value);
        let hours = currentValue / 60;
        let days = currentValue / 24 / 60;
        let seconds = currentValue * 60;
        
        inputs.hours.value = hours;
        inputs.days.value = days;
        inputs.seconds.value = seconds;
    }

    function secondsHandler() {
        let currentValue = Number(inputs.seconds.value);
        let hours = currentValue / 60 / 60;
        let minutes = currentValue / 60;
        let days = currentValue / 24 / 60 / 60;
        
        inputs.hours.value = hours;
        inputs.minutes.value = minutes;
        inputs.days.value = days;
    }
}