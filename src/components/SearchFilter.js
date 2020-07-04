import React from "react";
import Select from "react-select";

const SearchFilter = ({ flightType, cityList, handleSelectChange, excludedCity }) => {
  return (
    <Select
      id="select-city"
      placeholder={`Enter ${
        flightType === "oneWay" ? "Origin" : "Destination"
      } City`}
      isClearable={true}
      onChange={selectedOption =>
        handleSelectChange(selectedOption, flightType)
      }
      options={cityList.filter(city => city.value !== excludedCity)}
    />
  );
};

export default SearchFilter;