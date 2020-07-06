import React from "react";
import { shallow } from "enzyme";
import FlightData from "./FlightData";
import { flightData } from "../constants/constants";

describe("<FlightData/>", () => {
  let wrapper;
  beforeEach(() => {
    const setShowHideDetails = jest.fn();
    wrapper = shallow(
      <FlightData
        data={flightData}
        setShowHideDetails={setShowHideDetails}
        isOneWayFlight={false}
        origin="Pune"
        destination="Chennai"
        isReturnFlight={true}
        journeyDate={new Date()}
      />
    );
  });
  describe("component rendering based on oneWayflight or connecting flight", () => {
    it("verifies if fligh Stats are correctly getting rendered", () => {
      expect(wrapper.find(".returnIcon").at(0).props()).toEqual({
        alt: "planeIcon",
        className: "returnIcon",
        src: "returnPlane.png",
      });
      expect(
        wrapper.find(".originToDestination").at(0).props().children
      ).toEqual(["Pune", " to ", "Chennai"]);
      expect(wrapper.find(".flightsFound").at(0).props().children).toEqual([
        3,
        " flight",
        "s",
        " found",
      ]);
      expect(wrapper.find(".flightsFoundDate").at(0).props().children).toEqual([
        " ",
        "Mon, 6 July ",
      ]);
    });
    it("verifies if flighCompany is rendered as isMultiLine is true or false", () => {
      console.log(wrapper.find(".flighCompany").at(0).props());
      expect(wrapper.find(".flighCompany").at(0).props().children).toBe(
        "Mango"
      );
      // for connecting flights
      expect(wrapper.find(".flighCompany").at(1).props().children).toBe(
        "Multiple"
      );
      expect(wrapper.find(".flighCompany").at(2).props().children).toBe(
        "Multiple"
      );
    });
    // it("verifies if flighDetailsLink is rendered for connecting flights", () => {
    //   // for connecting flights
    //   expect(wrapper.find(".detailsAnchor").at(0).props().children).toEqual([
    //     "Hide",
    //     " Details",
    //   ]);
    //   wrapper.find(".detailsAnchor").at(0).simulate("click");
    //   expect(wrapper.find(".detailsAnchor").at(1).props().children).toEqual([
    //     "Show",
    //     " Details",
    //   ]);
    // });

    // it("verifies if flightNo is rendered for oneWay flights", () => {
    //   expect(wrapper.find(".flightNo").at(0).props().children).toEqual("A-001");
    // });
    // it("verifies if departureInfo is rendered", () => {
    //   expect(wrapper.find(".departureInfo").at(0).props().children).toBe(
    //     "5:00"
    //   );
    //   expect(wrapper.find(".flightOrigin").at(0).props().children).toBe("Pune");
    //   // for connecting flights
    //   expect(wrapper.find(".departureInfo").at(1).props().children).toBe(
    //     "10:00"
    //   );
    //   expect(wrapper.find(".flightOrigin").at(1).props().children).toBe("Pune");
    //   expect(wrapper.find(".departureInfo").at(2).props().children).toBe(
    //     "10:00"
    //   );
    //   expect(wrapper.find(".flightOrigin").at(2).props().children).toBe("Pune");
    // });

    // it("verifies if destinationInfo is rendered", () => {
    //   expect(wrapper.find(".destinationInfo").at(0).props().children).toBe(
    //     "8:00"
    //   );
    //   expect(wrapper.find(".flightDestination").at(0).props().children).toBe(
    //     "Chennai"
    //   );
    //   // for connecting flights
    //   expect(wrapper.find(".destinationInfo").at(1).props().children).toBe(
    //     "13:00"
    //   );
    //   expect(wrapper.find(".flightDestination").at(1).props().children).toBe(
    //     "Chennai"
    //   );
    //   expect(wrapper.find(".destinationInfo").at(2).props().children).toBe(
    //     "13:30"
    //   );
    //   expect(wrapper.find(".flightDestination").at(2).props().children).toBe(
    //     "Chennai"
    //   );
    // });
    // it("verifies if timeDuration and typeOfTravel is rendered", () => {
    //   expect(wrapper.find(".timeDuration").at(0).props().children).toBe(
    //     "03h 00m"
    //   );
    //   expect(wrapper.find(".typeOfTravel").at(0).props().children).toBe(
    //     "Non Stop"
    //   );
    //   // for connecting flights
    //   expect(wrapper.find(".timeDuration").at(1).props().children).toBe(
    //     "03h 00m"
    //   );
    //   expect(wrapper.find(".typeOfTravel").at(1).props().children).toBe(
    //     "Total Duration"
    //   );
    //   expect(wrapper.find(".timeDuration").at(2).props().children).toBe(
    //     "03h 30m"
    //   );
    //   expect(wrapper.find(".typeOfTravel").at(2).props().children).toBe(
    //     "Total Duration"
    //   );
    // });
    // it("verifies if flightPrice is rendered", () => {
    //   expect(wrapper.find(".price").at(0).props().children).toBe("3000");
    //   // for connecting flights
    //   expect(wrapper.find(".price").at(1).props().children).toBe("7000");
    //   expect(wrapper.find(".price").at(2).props().children).toBe("8000");
    // });
    // it("verifies if Book button is rendered", () => {
    //   expect(wrapper.find(".flightBookButton").at(0)).toExist();
    //   expect(wrapper.find(".flightBookButton").at(0).props().children).toBe(
    //     "Book"
    //   );
    //   // for connecting flights
    //   expect(wrapper.find(".flightBookButton").at(1)).toExist();
    //   expect(wrapper.find(".flightBookButton").at(2)).toExist();
    // });
    // describe("rendering of connecting flight info", () => {
    //   it("verifies if layover time is rendered when click on showDetails", () => {
    //     expect(wrapper.find(".layOverTime").at(0).props().children).toEqual([
    //       "Layover Time :: ",
    //       "00h 30m",
    //     ]);
    //   });
    //   it("verifies if connectingFlightsInfo are rendered when click on showDetails", () => {
    //     expect(wrapper.find(".connectingFlightsInfo").at(0)).toExist();
    //     expect(wrapper.find(".connectingFlightsInfo").at(0).props()).toEqual({
    //       className: "connectingFlightsInfo",
    //       subFlight: {
    //         arrivalTime: "11:00",
    //         departureTime: "10:00",
    //         destination: "Mumbai",
    //         flightNo: "A-002",
    //         name: "Apple",
    //         origin: "Pune",
    //         price: "3500",
    //       },
    //     });
    //   });
    // });
  });
});
