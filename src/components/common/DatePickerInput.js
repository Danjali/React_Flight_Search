import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import calendarIcon from "../../Images/calendar.png";
const DatePickerInput = ({ flightType, startDate, handleDateChange, minDate }) => {
  const datepicker = useRef();
  return (
    <div className="datePickerWrapper">
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date, flightType)}
        ref={datepicker}
        minDate={minDate ? minDate : new Date()}
        placeholderText={`${
          flightType === "oneWay" ? "Departure" : "Return"
        } Date`}
        strictParsing
        dateFormat="yyyy/MM/dd"
        className="datePicker"
        showDisabledMonthNavigation
      />
      <img
        src={calendarIcon}
        alt="calendarIcon"
        onClick={() => datepicker.current.setOpen(true)}
      />
    </div>
  );
};
export default DatePickerInput;
