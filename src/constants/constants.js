export const passengerSize = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];

export const defaultUserState = {
  originCity: "",
  destinationCity: "",
  journeyDate: null,
  returnDate: null,
  numOfPassengers: 1,
  isOneWayFlight: true,
};

// mock data for unit testing
export const flightData = [
  {
    name: "Mango",
    departureTime: "5:00",
    arrivalTime: "8:00",
    origin: "Origin",
    destination: "Destination",
    price: "3000",
    isMultiLine: true,
  },
  {
    name: "Banana",
    departureTime: "11:00",
    arrivalTime: "12:00",
    origin: "Origin",
    destination: "Destination",
    price: "5000",
    isMultiLine: false,
  },
];
