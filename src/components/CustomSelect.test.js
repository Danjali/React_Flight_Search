import React from "react";
import { shallow } from "enzyme";
import CustomSelect from "./CustomSelect";
import { passengerSize } from "../constant/constants";

describe("<CustomSelect/>", () => {
  let wrapper;
  let search;
  beforeEach(() => {
    const handleSelectChange = jest.fn();
    wrapper = shallow(<CustomSelect handleSelectChange={handleSelectChange} />);
    search = wrapper.find("#select-passenger-size");
  });
  it("verifies if select component is rendered", () => {
    expect(search).toHaveLength(1);
  });
  it("verifies select component with props", () => {
    expect(search.props().placeholder).toBe("Select Passengers");
    expect(search.props().options).toBe(passengerSize);
    search.at(0).simulate("change");
  });
});
