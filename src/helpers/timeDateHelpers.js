const { DateTime } = require("luxon");

export const convertDatetoBPBDate = (ISODate) => {
  let splitDate = ISODate.split("-");
  let day = splitDate[1];
  let mo = splitDate[2];
  let year = splitDate[0];
  return day + "/" + mo + "/" + year;
};


export const todayPlus = () => {
  let today = DateTime.now().setZone("America/Los_Angeles");
  let todaySend = today.toString().split("T")[0];

  let tomorrow = DateTime.now()
    .setZone("America/Los_Angeles")
    .plus({ days: 1 });
  let tomorrowSend = tomorrow.toString().split("T")[0];

  let twoDay = DateTime.now().setZone("America/Los_Angeles").plus({ days: 2 });
  let twoDaySend = twoDay.toString().split("T")[0];

  let threeDay = DateTime.now().setZone("America/Los_Angeles").plus({ days: 3 });
  let threeDaySend = threeDay.toString().split("T")[0];

  return [todaySend, tomorrowSend, twoDaySend, threeDaySend];
};


export const convertDateToDayOfWeek = (date) => {
  
  let dateSplit = date.split("/");
  let dayOfWeek = DateTime.local(
    Number(dateSplit[2]),
    Number(dateSplit[0]),
    Number(dateSplit[1])
  ).weekdayShort;
  return dayOfWeek
}

