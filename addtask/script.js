let hello   = document.createElement('div'),
    today   = document.createElement('div'),
    time    = document.createElement('div'),
    newYear = document.createElement('div');

let date = new Date();

function getDayTime() {
  let helloTime = date.getHours();

  if (helloTime >= 0 && helloTime <= 4) {
    helloTime = 'Доброй ночи';
  } else if (helloTime > 4 && helloTime <= 12) {
    helloTime = 'Доброе утро';
  } else if (helloTime > 12 && helloTime <= 18) {
    helloTime = 'Добрый день';
  } else {
    helloTime = 'Добрый вечер';
  }

  return helloTime;
}

function getWeekDay(date) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[date.getDay()];
}

function getTimeFormat(format) {
  let timeFormats = ['AM', 'PM'],
      time = date.getHours();

  if (time >= 0 && time < 12) {
    format = timeFormats[1];
  } else {
    format = timeFormats[0];
  }

  return format;
}

function newYearTimer() {
    let stopDate = new Date("January 1, 2020"),
        nowDate = date,
        msDay = 24 * 60 * 60 * 1000,
        daysCount = Math.round((stopDate.getTime() - nowDate.getTime()) / msDay),
        dayName = " ",
        dayString = " " + daysCount,
        cutDay = parseInt(dayString.substr(dayString.length - 1));

    if (cutDay > 4 && cutDay < 21) {
        dayName= "дней";
    } else if (cutDay == 1) {
        dayName = "день";
    } else if (cutDay == 2 || cutDay == 3 || cutDay == 4) {
        dayName = "дня";
    } else {
        dayName = "дней";
    }

    return `${daysCount} ${dayName}`;
}

hello.textContent = `${getDayTime()}`;
hello.style.cssText = `font-size: 26px;`;

today.textContent = `Сегодня: ${getWeekDay(date)}`;
today.style.cssText = `font-size: 26px;`;

time.textContent = `Текущее время: ${date.toTimeString().substring(0, 8)} ${getTimeFormat()}`;
time.style.cssText = `font-size: 26px;`;

newYear.textContent = `До Нового Года осталось ${newYearTimer()}`;
newYear.style.cssText = `font-size: 26px;`;

document.body.appendChild(hello);
document.body.appendChild(today);
document.body.appendChild(time);
document.body.appendChild(newYear);