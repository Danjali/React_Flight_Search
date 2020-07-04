import { parseDate, convertDate } from "./util";

describe("testing of utility functions", () => {
  it("verifies parseDate function for month less than 09", () => {
    let todaysDate = new Date("2020-07-04");
    let date = parseDate(todaysDate);
    expect(date).toBe("2020/07/04");
  });
  it("verifies parseDate function for month less than 09", () => {
    let todaysDate = new Date("2020-11-04");
    let date = parseDate(todaysDate);
    expect(date).toBe("2020/11/04");
  });
  // it("verifies parseDate function when date is blank", () => {
  //   let todaysDate = "";
  //   let dateNumber = convertDate(todaysDate);
  //   expect(dateNumber).toBe(null);
  // });
  // it("verifies parseDate function when date is not blank", () => {
  //   let todaysDate = "2020/11/04";
  //   let dateNumber = convertDate(todaysDate);
  //   expect(dateNumber).toBe('2020-11-03T18:30:00.000Z');
  // });
});
