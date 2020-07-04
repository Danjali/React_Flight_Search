import React from "react";
import { shallow } from "enzyme";
import SearchFilter from "./SearchFilterInput";

describe("<SearchFilter/>", () => {
  let wrapper;
  let search;
  const props = {
    cityList: [
      { value: "ABC", label: "ABC" },
      { value: "PQR", label: "PQR" },
      { value: "XYZ", label: "XYZ" },
    ],
    handleSelectChange: jest.fn(),
    excludedCity: "PQR",
  };
  beforeEach(() => {
    wrapper = shallow(<SearchFilter {...props} flightType="oneWay" />);
    search = wrapper.find("#select-city");
  });
  it("verifies if select component is rendered", () => {
    expect(search).toHaveLength(1);
  });
  it("verifies select component with props", () => {
    expect(search.props().placeholder).toBe("Enter Origin City");
    expect(search.props().isClearable).toBe(true);
    expect(search.props().options).toEqual([
      { value: "ABC", label: "ABC" },
      { value: "XYZ", label: "XYZ" },
    ]);
    search.at(0).simulate("change");
  });
  it("verifies place holder change for destination city", () => {
    const nextWrapper = shallow(
      <SearchFilter flightType="twoWay" {...props} />
    );
    expect(nextWrapper.find("#select-city").props().placeholder).toBe(
      "Enter Destination City"
    );
  });
});
