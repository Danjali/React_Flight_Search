import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import FlightData from "./FlightData";
import SearchFilterInput from "./common/SearchFilterInput";
import DatePickerInput from "./common/DatePickerInput";
import CustomSelectInput from "./common/CustomSelectInput";
import PriceFilter from "./common/PriceFilter";
import { parseDate, getFlightData } from "../utility/util";
import { defaultUserState } from "../constants/constants";
import { fetchFlightData } from "../api/api";
import LoadingOverlay from "react-loading-overlay";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [userInput, setUserInput] = useState(defaultUserState);
  const [flightData, setFlightData] = useState([]);
  const [oneWayFlightData, setAvailableOneWayFlights] = useState([]);
  const [returnFlightData, setAvailableReturnFlights] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [showFlights, setShowFlights] = useState(false);
  const [showLoader, setLoader] = useState(false);

  const {
    originCity,
    destinationCity,
    journeyDate,
    returnDate,
    journeyDateObj,
    returnDateObj,
    numOfPassengers,
    isOneWayFlight,
    priceRange,
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
      getFlightData(
        flightData,
        originCity,
        destinationCity,
        journeyDate,
        numOfPassengers,
        priceRange
      )
    );
    if (!isOneWayFlight) {
      setAvailableReturnFlights(
        getFlightData(
          flightData,
          destinationCity,
          originCity,
          returnDate,
          numOfPassengers,
          priceRange
        )
      );
    }
    setShowFlights(true);
  };

  const handleTabChange = (isOneWayFlight) => {
    setUserInput({ ...userInput, isOneWayFlight: isOneWayFlight });
  };

  const handleShowHideDetails = (flightKey, data, isOneWayFlight) => {
    const newFlighData = data.map((item, key) => {
      return {
        ...item,
        showSubFlights:
          flightKey === key ? !item.showSubFlights : item.showSubFlights
      };
    });
    isOneWayFlight
      ? setAvailableOneWayFlights(newFlighData)
      : setAvailableReturnFlights(newFlighData);
  };

  const handlePriceChange = (priceRange) => {
    setUserInput({ ...userInput, priceRange: priceRange });
  };

  const isValidSearch = () => {
    let isValidReturnDate = !isOneWayFlight && returnDate === "" ? false : true;

    return (
      originCity !== "" &&
      destinationCity !== "" &&
      numOfPassengers !== "" &&
      journeyDate !== "" &&
      isValidReturnDate
    );
  };

  useEffect(() => {
    (async () => {
      setLoader(true);
      const flightResponse = await fetchFlightData();
      if (flightResponse) {
        setFlightData(flightResponse.data);
        setCityList(flightResponse.uniqueCity);
      }
      setLoader(false);
    })();
  }, []);

  return (
    <div className="app">
      <LoadingOverlay
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgb(7, 176, 227)",
          }),
        }}
        active={showLoader}
        spinner={<GridLoader />}
      >
        <div className="mainHeading">Flight Search App</div>
        <div>
          <div className="tab">
            <button
              className={`button ${isOneWayFlight && "active"}`}
              onClick={() => handleTabChange(true)}
            >
              One Way
            </button>
            <button
              className={`button ${!isOneWayFlight && "active"}`}
              onClick={() => handleTabChange(false)}
            >
              Return
            </button>
          </div>
          <div className="flightFiltetWrap">
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
                minDate={journeyDateObj}
                startDate={returnDateObj}
                handleDateChange={handleDateChange}
              />
            )}
            <CustomSelectInput
              handleSelectChange={handlePassengerChange}
              size={numOfPassengers}
            />
            <PriceFilter
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
            />
            <button
              className="button blueBtn"
              onClick={searchFlights}
              disabled={!isValidSearch()}
            >
              Search
            </button>
          </div>
          {showFlights && (
            <div>
              <div className={returnDate ? "leftAlign" : "appContent"}>
                <FlightData
                  id="flight-data"
                  data={oneWayFlightData}
                  origin={originCity}
                  destination={destinationCity}
                  setShowHideDetails={handleShowHideDetails}
                  journeyDate={journeyDateObj}
                />
              </div>
              {returnDate && (
                <div className="rightAlign">
                  <FlightData
                    id="flight-data"
                    data={returnFlightData}
                    origin={destinationCity}
                    destination={originCity}
                    isOneWayFlight={!isOneWayFlight}
                    isReturnFlight={true}
                    journeyDate={returnDateObj}
                    setShowHideDetails={handleShowHideDetails}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </LoadingOverlay>
    </div>
  );
}

export default App;
