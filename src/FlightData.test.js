import React from "react";
import { shallow } from "enzyme";
import FlightData from "./FlightData";
import {flightData} from "./constant/constants";

describe("<FlightData/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightData data={flightData} />);
  });
  it("verifies if flighCompany is rendered", () => {
      expect(wrapper.find('.flighCompany').at(0).props().children).toBe('Mango');
       
      // for second flight
      expect(wrapper.find('.flighCompany').at(1).props().children).toBe('Banana');
  });
  it("verifies if flighDetailsLink is rendered", () => {
    expect(wrapper.find('.flighDetailsLink').at(0).props().children).toBe('show Details');
     
    // for second flight
    expect(wrapper.find('.flighDetailsLink').at(1).props().children).toBe('show Details');
  });
  it("verifies if departureInfo is rendered", () => {
      expect(wrapper.find('.departureInfo').at(0).props().children).toBe('5:00');
      expect(wrapper.find('.flightOrigin').at(0).props().children).toBe('Origin');

       // for second flight
      expect(wrapper.find('.departureInfo').at(1).props().children).toBe('11:00');
      expect(wrapper.find('.flightOrigin').at(1).props().children).toBe('Origin');
  });
  it("verifies if destinationInfo is rendered", () => {
    expect(wrapper.find('.destinationInfo').at(0).props().children).toBe('8:00');
    expect(wrapper.find('.flightDestination').at(0).props().children).toBe('Destination');

     // for second flight
    expect(wrapper.find('.destinationInfo').at(1).props().children).toBe('12:00');
    expect(wrapper.find('.flightDestination').at(1).props().children).toBe('Destination');
  });
  it("verifies if timeDuration and typeOfTravel is rendered", () => {
    expect(wrapper.find('.timeDuration').at(0).props().children).toBe(3);
    expect(wrapper.find('.typeOfTravel').at(0).props().children).toBe('Non Stop');
    
    // for second flight
    expect(wrapper.find('.timeDuration').at(1).props().children).toBe(1);
    expect(wrapper.find('.typeOfTravel').at(1).props().children).toBe('Non Stop');
  });
  it("verifies if flightPrice is rendered", () => {
    expect(wrapper.find('.flightPrice').at(0).props().children).toBe('3000');
    
    // for second flight
    expect(wrapper.find('.flightPrice').at(1).props().children).toBe('5000');
  });
});
