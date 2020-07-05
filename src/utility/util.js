import { DAYS, MONTHS } from "../constants/constants";

export const parseDate = (date) => {
  let month = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  let newDate = date.getDate();
  newDate = newDate > 9 ? newDate : `0${newDate}`;
  return `${date.getFullYear()}/${month}/${newDate}`;
};

export const getTotalMinutes = (timeString) => {
  return (
    Number(timeString.split(":")[0] * 60) + Number(timeString.split(":")[1])
  );
};

export const formatDateString = (date) => {
  const day = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  return `${day.slice(0, 3)}, ${date.getDate()} ${month} `;
};

export const convertTime = (userMinutes) => {
  const hours = userMinutes / 60;
  let rhours = Math.floor(hours);
  let rminutes = Math.round((hours - rhours) * 60);
  if (rminutes <= 9) {
    rminutes = `0${rminutes}`;
  }
  if (rhours <= 9) {
    rhours = `0${rhours}`;
  }
  return `${rhours}h ${rminutes}m`;
};

export const getFlightDuration = (departureTime, arrivalTime) => {
  const timeDifference =
    getTotalMinutes(arrivalTime) - getTotalMinutes(departureTime);
  return convertTime(timeDifference);
};

export const getFlightData = (
  flightData,
  originCity,
  destinationCity,
  userDate,
  numOfPassengers
) => {
  let directFlight = [];
  let originCityFlight = [];
  let destinationCityFlight = [];
  flightData.forEach((item) => {
    if (userDate === item.date) {
      if (item.origin === originCity && item.destination === destinationCity) {
        directFlight.push({ ...item, price: item.price * numOfPassengers });
      } else if (item.origin === originCity) {
        originCityFlight.push(item);
      } else if (item.destination === destinationCity) {
        destinationCityFlight.push(item);
      }
    }
  });

  let connectingFlights = [];
  for (let i = 0; i < originCityFlight.length; i++) {
    for (let j = 0; j < destinationCityFlight.length; j++) {
      if (originCityFlight[i].destination === destinationCityFlight[j].origin) {
        const layOverTime =
          getTotalMinutes(destinationCityFlight[j].departureTime) -
          getTotalMinutes(originCityFlight[i].arrivalTime);
        if (layOverTime > 30) {
          connectingFlights.push({
            arrivalTime: destinationCityFlight[j].arrivalTime,
            date: originCityFlight[i].date,
            departureTime: originCityFlight[i].departureTime,
            destination: destinationCity,
            origin: originCity,
            price:
              (originCityFlight[i].price + destinationCityFlight[j].price) *
              numOfPassengers,
            isMultiLine: true,
            subFlightData: [originCityFlight[i], destinationCityFlight[j]],
            layOverTime,
          });
        }
      }
    }
  }
  return [...directFlight, ...connectingFlights];
};
