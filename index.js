const timeOfDay = document.getElementById('time-of-day');
const dayWeek = document.getElementById('day-week');
const time = document.getElementById('time');
const newYear = document.getElementById('new-year');

const app = () => {
    let date = new Date();


    let hour = date.getHours();
    let dayOfWeek = date.getDay();


    const getTime = () => {
        let newDate = new Date()
        console.log(date);
        time.textContent = 'Текущее время: ' + newDate.toLocaleTimeString('ru')
    }



    const getTimeOfDay = () => {
        if (hour >= 6 && hour < 12) {
            timeOfDay.textContent = 'Доброе утро';
        } else if (hour >= 12 && hour < 18) {
            timeOfDay.textContent = 'Добрый день';
        } else if (hour >= 18 && hour <= 23) {
            timeOfDay.textContent = 'Добрый вечер';
        } else if (hour >= 0 && hour < 6) {
            timeOfDay.textContent = 'Доброй ночи';
        }
    };



    const getDayWeek = () => {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        dayWeek.textContent = 'Сегодня: ' + days[dayOfWeek];
    };

    const getTimeToNewYear = () => {
        let timeToNewYear = new Date(date.getFullYear() + 1, 0, 1);
        let time = timeToNewYear.getTime() - date.getTime();
        newYear.textContent = 'До нового года осталось ' + Math.floor(time / 1000 / 60 / 60 / 24) + ' дней';
    };

    getTimeOfDay();
    getDayWeek();
    getTimeToNewYear();
    getTime()
}
app()
setInterval(app, 900)