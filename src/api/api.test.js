import { fetchFlightData } from "./api";
import { flightData } from "../constants/constants";
describe("mock fetch call", () => {
  it("mock the fetch call and verifies the response on success", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(flightData),
      })
    );
    const response = await fetchFlightData();
    expect(response.data).toBe(flightData);
    expect(response.uniqueCity).toEqual([{ value: "Pune", label: "Pune" }]);
  });
  it("mock the fetch call and verifies the response on error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject("Api call failed"),
      })
    );
    const response = await fetchFlightData();
    expect(response).toBe("Api call failed");
  });
});
