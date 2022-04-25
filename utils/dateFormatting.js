// formats dates to appear like "4/25/2022 11:47 AM"
// coding credits from https://stackoverflow.com/questions/30486086/converting-a-long-date-with-time-to-mm-dd-yyyy-hhmm-am-pm

const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = (1 + dateObj.getMonth()).toString();
  const day = dateObj.getDate().toString();
  let hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  let timeOfDay = "AM";

  const timeOfDayCheck = parseInt(hour);

  if (timeOfDayCheck > 12) {
    timeOfDay = "PM";
    hour = timeOfDayCheck - 12;
  } else if (timeOfDayCheck === 0) {
    hour = "12";
  }

  return (
    month + "/" + day + "/" + year + " " + hour + ":" + minute + " " + timeOfDay
  );
};

module.exports = formatDate;
