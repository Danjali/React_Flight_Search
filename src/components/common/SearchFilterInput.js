import React from "react";
import Select from "react-select";

const SearchFilterInput = ({ flightType, cityList, handleSelectChange, excludedCity }) => {
  return (
    <Select
      id="select-city"
      placeholder={`Enter ${
        flightType === "oneWay" ? "Origin" : "Destination"
      } City`}
      onChange={selectedOption =>
        handleSelectChange(selectedOption, flightType)
      }
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null
      }}
      options={cityList.filter(city => city.value !== excludedCity)}
    />
  );
};

export default SearchFilterInput;