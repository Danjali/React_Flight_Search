import React from "react";
import Select from "react-select";
import { passengerSize } from "../../constants/constants";

const CustomSelectInput = ({ handleSelectChange, size }) => {
  let sizeValue = size? {value: size, label: size}: {value:'', size:''}
  return (
    <Select
      className="customSelect"
      value={sizeValue}
      id="select-passenger-size"
      placeholder="Select Passengers"
      onChange={handleSelectChange}
      components={{
        IndicatorSeparator: () => null,
      }}
      options={passengerSize}
    />
  );
};

export default CustomSelectInput;
