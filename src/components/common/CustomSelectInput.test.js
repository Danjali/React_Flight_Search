import React from "react";
import { shallow } from "enzyme";
import CustomSelectInput from "./CustomSelectInput";
import { passengerSize } from "../../constants/constants";

describe("<CustomSelectInput/>", () => {
  let wrapper;
  let search;
  beforeEach(() => {
    const handleSelectChange = jest.fn();
    wrapper = shallow(<CustomSelectInput handleSelectChange={handleSelectChange} size={2}/>);
    search = wrapper.find("#select-passenger-size");
  });
  it("verifies if select component is rendered", () => {
    expect(search).toHaveLength(1);
  });
  it("verifies select component with props", () => {
    expect(search.props().placeholder).toBe("Select Passengers");
    expect(search.props().value).toEqual({"label": 2, "value": 2})
    expect(search.props().options).toBe(passengerSize);
    search.at(0).simulate("change");
  });
});
