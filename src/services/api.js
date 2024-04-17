// import { getAvailableTimes, setReservedTime } from "./store";

const generateRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed.getDate() % m;

  return () => (s = (s * a) % m) / m;
};
 
export const fetchAPI = (date) => {
  let result = [];
  let random = generateRandom(new Date(date));

  for (let i = 15; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }
  
  return result;
};

export const submitAPI = (formData) => true;
