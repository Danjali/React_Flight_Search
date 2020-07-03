import React from "react";
import Select from "react-select";
import { passengerSize } from "../constant/constants";

const CustomSelect = ({ handleSelectChange }) => {
  return (
    <Select
      id="select-passenger-size"
      placeholder="Select Passengers"
      onChange={handleSelectChange}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      options={passengerSize}
    />
  );
};

export default CustomSelect;
