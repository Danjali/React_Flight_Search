import React, {useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
const DatePickerInput = ({ flightType, startDate, handleDateChange }) => {
  const datepicker = useRef();
  return (
    <div className="datePickerWrapper">
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date, flightType)}
        ref={datepicker}
        minDate={new Date("2020-11-01")}
        placeholderText={`${
          flightType === "oneWay" ? "Departure" : "Return"
        } Date`}
        dateFormat="yyyy/MM/dd"
        className="datePicker form-control"
        showDisabledMonthNavigation
      />
      <FontAwesomeIcon
        onClick={() => datepicker.current.setOpen(true)}
        icon={faCalendar}
      />
    </div>
  );
};
export default DatePickerInput;
