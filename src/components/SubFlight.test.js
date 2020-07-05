import React from "react";
import { shallow } from "enzyme";
import SubFlight from "./SubFlight";
import { subFlight } from "../constants/constants";
describe("<SubFlight/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SubFlight subFlight={subFlight} index={0} layOverTime={120} />
    );
  });
  it("verifies if all the component of subflight gets rendered", () => {
    expect(wrapper.find(".flighCompany").props().children).toEqual("Apple");
    expect(wrapper.find(".flighNumber").props().children).toEqual("C-006");
    expect(wrapper.find(".departureInfo").props().children).toEqual("10:00");
    expect(wrapper.find(".flightOrigin").props().children).toEqual("Pune");
    expect(wrapper.find(".destinationInfo").props().children).toEqual("11:30");
    expect(wrapper.find(".flightDestination").props().children).toEqual(
      "Bangalore"
    );
    expect(wrapper.find(".flightDuration").props().children).toEqual("01h 30m");
    expect(wrapper.find(".layOverTime").props().children).toEqual([
      "Layover Time :: ",
      "02h 00m",
    ]);
  });
});
