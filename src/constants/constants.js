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
    origin: "Pune",
    destination: "Chennai",
    price: "3000",
    isMultiLine: false,
    flightNo: "A-001",
  },
  {
    name: "Banana",
    departureTime: "10:00",
    arrivalTime: "13:00",
    origin: "Pune",
    destination: "Chennai",
    price: "7000",
    isMultiLine: true,
    showSubFlights: true,
    layOverTime: 30,
    subFlightData: [
      {
        name: "Apple",
        departureTime: "10:00",
        arrivalTime: "11:00",
        origin: "Pune",
        destination: "Mumbai",
        price: "3500",
        flightNo: "A-002",
      },
      {
        name: "Apple",
        departureTime: "11:30",
        arrivalTime: "13:00",
        origin: "Mumbai",
        destination: "Chennai",
        price: "3500",
        flightNo: "A-003",
      },
    ],
  },
  {
    name: "Apple",
    departureTime: "10:00",
    arrivalTime: "13:30",
    origin: "Pune",
    destination: "Chennai",
    price: "8000",
    layOverTime: 60,
    isMultiLine: true,
    showSubFlights: false,
    subFlightData: [
      {
        name: "Apple",
        departureTime: "10:00",
        arrivalTime: "11:00",
        origin: "Pune",
        destination: "Bangalore",
        price: "3500",
        flightNo: "C-003",
      },
      {
        name: "Apple",
        departureTime: "11:30",
        arrivalTime: "13:30",
        origin: "Bangalore",
        destination: "Chennai",
        price: "4500",
        flightNo: "C-006",
      },
    ],
  },
];

export const subFlight = {
  name: "Apple",
  flightNo: "C-006",
  departureTime: "10:00",
  origin: "Pune",
  destination: "Bangalore",
  arrivalTime: "11:30",
};
