import React from "react";
import { shallow } from "enzyme";
import PriceFilter from "./PriceFilter";
const priceRange = { max: 15000, min: 0 };
describe("<PriceFilter/>", () => {
  let wrapper;
  let priceInput;
  beforeEach(() => {
    const handlePriceChange = jest.fn();
    wrapper = shallow(
      <PriceFilter
        handlePriceChange={handlePriceChange}
        priceRange={priceRange}
      />
    );
  });
  it("verifies if title for price range filter rendered", () => {
    priceInput = expect(
      wrapper.find(".priceRangeTitle").props().children
    ).toEqual("Refine flight search");
  });
  it("verifies input range field and its onChange functionality", () => {
    expect(wrapper.find(".inputRangeField").props().minValue).toBe(0);
    expect(wrapper.find(".inputRangeField").props().maxValue).toBe(50000);
    wrapper
      .find(".inputRangeField")
      .simulate("change", { target: { value: 10000 } });
    expect(wrapper.find(".inputRangeField").props().value).toEqual({
      target: { value: 10000 },
    });
  });
});
