import React, { useState, useEffect } from "react";
import "../styles/App.css";
import FlightData from "./FlightData";
import SearchFilterInput from "./common/SearchFilterInput";
import DatePickerInput from "./common/DatePickerInput";
import CustomSelectInput from "./common/CustomSelectInput";
import { parseDate, getFlightData} from "../utility/util";
import {defaultUserState} from "../constants/constants";
import {fetchFlightData} from "../api/api";

function App() {
  const [userInput, setUserInput] = useState(defaultUserState);
  const [flightData, setFlightData] = useState([]);
  const [oneWayFlightData, setAvailableOneWayFlights] = useState([]);
  const [returnFlightData, setAvailableReturnFlights] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [showFlights, setShowFlights] = useState(false);

  const {
    originCity,
    destinationCity,
    journeyDate,
    returnDate,
    journeyDateObj,
    returnDateObj,
    numOfPassengers,
    isOneWayFlight,
  } = userInput;

  const handleCityChange = (selectedOption, flightType) => {
    const keyName = flightType === "oneWay" ? "originCity" : "destinationCity";
    setUserInput({ ...userInput, [keyName]: selectedOption.value });
  };

  const handleDateChange = (date, flightType) => {
    const keyName = flightType === "oneWay" ? "journeyDate" : "returnDate";
    setUserInput({
      ...userInput,
      [keyName]: parseDate(date),
      [`${keyName}Obj`]: date,
    });
  };

  const handlePassengerChange = (selectedOption) => {
    setUserInput({ ...userInput, numOfPassengers: selectedOption.value });
  };

  const searchFlights = () => {
    setAvailableOneWayFlights(
      getFlightData(flightData, originCity, destinationCity, journeyDate, numOfPassengers)
    );
    if (!isOneWayFlight) {
      setAvailableReturnFlights(
        getFlightData(flightData, destinationCity, originCity, returnDate, numOfPassengers)
      );
    }
    setShowFlights(true);
  };

  const handleTabChange = (isOneWayFlight) => {
    setUserInput({ ...userInput, isOneWayFlight: isOneWayFlight });
  };

  const handleShowHideDetails = (flightKey, data, isOneWayFlight) => {
    const newFlighData = data.map((item, key) => {
      if (flightKey === key) {
        item.showSubFlights = !item.showSubFlights;
      }
      return item;
    });
    isOneWayFlight ? setAvailableOneWayFlights(newFlighData) : setAvailableReturnFlights(newFlighData);
  };

  useEffect(() => {
    (async () => {
      const flightResponse = await fetchFlightData();
      if (flightResponse) {
        setFlightData(flightResponse.data);
        setCityList(flightResponse.uniqueCity);
      }
    })();
  }, []);

  return (
    <div className="app">
      <div className="appHeader">Flight Search App</div>
      <div>
        <button
          className={isOneWayFlight && "active"}
          onClick={() => handleTabChange(true)}
        >
          One Way
        </button>
        <button
          className={!isOneWayFlight && "active"}
          onClick={() => handleTabChange(false)}
        >
          Return
        </button>
        <SearchFilterInput
          excludedCity={destinationCity}
          handleSelectChange={handleCityChange}
          cityList={cityList}
          flightType="oneWay"
        />
        <SearchFilterInput
          excludedCity={originCity}
          cityList={cityList}
          handleSelectChange={handleCityChange}
        />
        <DatePickerInput
          flightType="oneWay"
          startDate={journeyDateObj}
          handleDateChange={handleDateChange}
        />
        {!isOneWayFlight && (
          <DatePickerInput
            startDate={returnDateObj}
            handleDateChange={handleDateChange}
          />
        )}
        <CustomSelectInput handleSelectChange={handlePassengerChange} size={numOfPassengers}/>
        <button onClick={searchFlights}>Search</button>
        {showFlights && (
          <div>
            <div className={returnDate ? "leftAlign" : "appContent"}>
              {originCity} to {destinationCity}
              <br />
              {oneWayFlightData.length} flights found {journeyDate}
              <FlightData id="flight-data" data={oneWayFlightData} setShowHideDetails={handleShowHideDetails} />
            </div>
            {returnDate && (
              <div className="rightAlign">
                {destinationCity} to {originCity}
                <br />
                {returnFlightData.length} flights found {returnDate}
                <FlightData id="flight-data" data={returnFlightData} isOneWayFlight={!isOneWayFlight} setShowHideDetails={handleShowHideDetails}/>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
