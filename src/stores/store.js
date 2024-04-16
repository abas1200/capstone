export const getAvailableTimes = (selectedDate) => {
  const InitializeTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

  const filledTimes = localStorage.getItem(selectedDate);
  if (!filledTimes) return InitializeTimes;
  else {
    const filled = JSON.parse(filledTimes);
    return InitializeTimes.filter((t) => !filled.includes(t));
  }
};

export const setReservedTime = (selectedDate, selectedTime) => {
  const filledTimes = localStorage.getItem(selectedDate);
  if (!filledTimes)
    localStorage.setItem(selectedDate, JSON.stringify([selectedTime]));
  else {
    const filled = JSON.parse(filledTimes);
    filled.push(selectedTime);
    localStorage.setItem(selectedDate, JSON.stringify(filled));
  }
};
