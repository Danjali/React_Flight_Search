import React, { useState, useEffect } from "react";
import "./App.css";
import FlightData from "./FlightData";
import SearchFilter from "./components/SearchFilter";
import DatePicker from "./components/DatePicker";
import CustomSelect from "./components/CustomSelect";
import { parseDate, getTimeDifference, getFlightData} from "./utility/util";
import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";

function App() {
  // check wheather any need of adding async await and loaders
  // const [isLoading, setIsLoading] = useState(false);
  const DEFAULT_USER_STATE = {
    originCity: "",
    destinationCity: "",
    journeyDate: null,
    returnDate: null,
    numOfPassengers: 1,
    isOneWayFlight: true,
  };

  const [userInput, setUserInput] = useState(DEFAULT_USER_STATE);
  const [flightData, setFlightData] = useState([]);
  const [availableOneWayFlightData, setAvailableOneWayFlights] = useState([]);
  const [availableReturnFlightData, setAvailableReturnFlights] = useState([]);
  const [cityList, setCityList] = useState([]);
  // const [travelType, setTravelType] = useState("");
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
    if (returnDate) {
      setAvailableReturnFlights(
        getFlightData(flightData, destinationCity, originCity, returnDate, numOfPassengers)
      );
    }
    setShowFlights(true);
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const handleTabChange = (isOneWayFlight) => {
    setUserInput({ ...userInput, isOneWayFlight: isOneWayFlight });
  };

  useEffect(() => {
    fetchJson("https://tw-frontenders.firebaseio.com/advFlightSearch.json")
      .then((response) => {
        const uniqueCity = [
          ...new Set(response.map((item) => item.origin)),
        ].map((item) => {
          return { value: item, label: item };
        });
        setCityList(uniqueCity);
        setFlightData(response);
      })
      .catch((error) => console.log(error));
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
        <SearchFilter
          excludedCity={destinationCity}
          handleSelectChange={handleCityChange}
          cityList={cityList}
          flightType="oneWay"
        />
        <SearchFilter
          excludedCity={originCity}
          cityList={cityList}
          handleSelectChange={handleCityChange}
        />
        <DatePicker
          flightType="oneWay"
          startDate={journeyDateObj}
          handleDateChange={handleDateChange}
        />
        {!isOneWayFlight && (
          <DatePicker
            // flightType={isOneWayFlight}
            startDate={returnDateObj}
            handleDateChange={handleDateChange}
          />
        )}
        <CustomSelect handleSelectChange={handlePassengerChange} />
        <button onClick={searchFlights}>Search</button>
        {showFlights && (
          <div>
            <div className={returnDate ? "leftAlign" : "appContent"}>
              {originCity} to {destinationCity}
              <br />
              {availableOneWayFlightData.length} flights found {journeyDate}
              <FlightData id="flight-data" data={availableOneWayFlightData} />
            </div>
            {returnDate && (
              <div className="rightAlign">
                {destinationCity} to {originCity}
                <br />
                {availableReturnFlightData.length} flights found {returnDate}
                <FlightData id="flight-data" data={availableReturnFlightData} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
