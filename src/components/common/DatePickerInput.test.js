import React, { useRef as defaultUseRef }from "react";
import { shallow, mount } from "enzyme";
import DatePickerInput from "./DatePickerInput";

describe("<DatePickerInput/>", () => {
  let useRef;
  beforeEach(() => {
     const mockUseRef = (obj) => () => Object.defineProperty({}, 'current', {
        get: () => obj,
        setOpen: () => {}
      })
     useRef = mockUseRef({ refFunction: jest.fn() })
  });
  it("verifies if DatePickerInput component is rendered", () => {
    const handleDateChange = jest.fn();
    const flightType= "oneWay";
    const startDate = "2020/11/04"
    let wrapper = shallow(<DatePickerInput handleDateChange={handleDateChange} 
        flightType={flightType} startDate={startDate} useRef={useRef}/>);
    const component = wrapper.find('[className="datePickerWrapper"]');
    expect(component).not.toBeNull();
  });
});
