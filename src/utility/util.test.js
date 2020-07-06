import {
  parseDate,
  formatDateString,
  getFlightDuration,
  getFlightData,
} from "./util";

describe("testing of utility functions", () => {
  const todaysDate = new Date("2020-07-04");
  it("verifies parseDate function for month less than 09", () => {
    const date = parseDate(todaysDate);
    expect(date).toBe("2020/07/04");
  });
  it("verifies parseDate function for month less than 09", () => {
    const date = parseDate(todaysDate);
    expect(date).toBe("2020/07/04");
  });
  it("verifies formatDateString function when date is blank", () => {
    const dateNumber = formatDateString(todaysDate);
    expect(dateNumber).toBe("Sat, 4 July ");
  });
  it("verifies getFlightDuration function when date is blank", () => {
    const departureTime = "5:00";
    const arrivalTime = "8:00";
    let duration = getFlightDuration(departureTime, arrivalTime);
    expect(duration).toBe("03h 00m");
  });
  describe("verifies if getFlightData returns data in expected format for given information", () => {
    let data = [
      {
        arrivalTime: "6:00",
        date: "2020/11/01",
        departureTime: "5:00",
        destination: "Mumbai (BOM)",
        flightNo: "AI-101",
        name: "Air India",
        origin: "Pune (PNQ)",
        price: 3525,
      },
      {
        arrivalTime: "9:50",
        date: "2020/11/01",
        departureTime: "7:20",
        destination: "Delhi (DEL)",
        flightNo: "AI-102",
        name: "Air India",
        origin: "Mumbai (BOM)",
        price: 5635,
      },
      {
        arrivalTime: "10:20",
        date: "2020/11/01",
        departureTime: "8:10",
        destination: "Delhi (DEL)",
        flightNo: "AI-104",
        name: "Air India",
        origin: "Pune (PNQ)",
        price: 4681,
      },
    ];
    let originCity = "Pune (PNQ)";
    let destinationCity = "Delhi (DEL)";
    let travelDate = "2020/11/01";
    let numOfPassengers = 2;
    let priceRange = { min: 0, max: 25000 };
    let processedData = [];
    processedData = getFlightData(
      data,
      originCity,
      destinationCity,
      travelDate,
      numOfPassengers,
      priceRange
    );
    const expectedProcessedData = [
      {
        arrivalTime: "10:20",
        date: "2020/11/01",
        departureTime: "8:10",
        destination: "Delhi (DEL)",
        flightNo: "AI-104",
        name: "Air India",
        origin: "Pune (PNQ)",
        price: 9362,
      },
      {
        arrivalTime: "9:50",
        date: "2020/11/01",
        departureTime: "5:00",
        destination: "Delhi (DEL)",
        origin: "Pune (PNQ)",
        price: 18320,
        isMultiLine: true,
        subFlightData: [
          {
            arrivalTime: "6:00",
            date: "2020/11/01",
            departureTime: "5:00",
            destination: "Mumbai (BOM)",
            flightNo: "AI-101",
            name: "Air India",
            origin: "Pune (PNQ)",
            price: 3525,
          },
          {
            arrivalTime: "9:50",
            date: "2020/11/01",
            departureTime: "7:20",
            destination: "Delhi (DEL)",
            flightNo: "AI-102",
            name: "Air India",
            origin: "Mumbai (BOM)",
            price: 5635,
          },
        ],
        layOverTime: 80,
      },
    ];
    expect(processedData[1].isMultiLine).toBe(true);
    expect(processedData).toEqual(expectedProcessedData);
  });
});
