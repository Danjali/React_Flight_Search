import React from "react";
import SubFlight from "./SubFlight";
import { getFlightDuration, formatDateString } from "../utility/util";
import directFlightIcon from "../Images/directFlight.png";
import mulipleFlightIcon from "../Images/mulipleFlight.png";
import planeIcon from "../Images/returnPlane.png";
const FlightData = ({
  data,
  setShowHideDetails,
  isOneWayFlight,
  isReturnFlight,
  origin,
  destination,
  journeyDate,
}) => {
  return (
    <div className="itemList">
      <div className="flightStats">
        <div className="imgWrapper">
          <img
            className={isReturnFlight ? "returnIcon" : "planeIcon"}
            src={planeIcon}
            alt="planeIcon"
          />
        </div>
        <div>
          <h3>
            {origin} to {destination}
          </h3>
          <p className="subInfo">
            <span>
              {data.length} flight{data.length > 1 ? "s" : ""} found
            </span>
            <span> {formatDateString(journeyDate)}</span>
          </p>
        </div>
      </div>
      <ul className="mainFlightListing">
        {data.map((item, index) => (
          <li key={index}>
            <div className="imgWrapper">
              <img
                src={item.isMultiLine ? mulipleFlightIcon : directFlightIcon}
                alt="planeIcon"
              />
            </div>
            <div>
              <div className="flightInfo">
                <h2 className="flighCompany">
                  {item.isMultiLine ? "Multiple" : item.name}
                </h2>
                {item.isMultiLine ? (
                  <a
                    href="# "
                    className="detailsAnchor"
                    onClick={() =>
                      setShowHideDetails(index, data, !isOneWayFlight)
                    }
                  >
                    {item.showSubFlights ? "Hide" : "Show"} Details
                  </a>
                ) : (
                  <span className="flightNo">{item.flightNo}</span>
                )}
              </div>
            </div>
            <div className="flightInfo">
              <h2 className="departureInfo">{item.departureTime}</h2>
              <span className="flightOrigin">{item.origin}</span>
            </div>
            <div className="flightInfo">
              <h2 className="destinationInfo">{item.arrivalTime}</h2>
              <span className="flightDestination">{item.destination}</span>
            </div>
            <div className="flightInfo">
              <h2 className={`"timeDuration" ${item.isMultiLine && "green"}`}>
                {getFlightDuration(item.departureTime, item.arrivalTime)}
              </h2>
              <span className="typeOfTravel">
                {item.isMultiLine ? "Total Duration" : "Non Stop"}
              </span>
            </div>
            <div className="flightInfo">
              <h2 className="price">&#8377; {item.price}</h2>
            </div>
            <div className="flightInfo">
              <button className="flightBookButton button">Book</button>
            </div>
            {item.isMultiLine && item.showSubFlights && (
              <div className="subFlightList">
                <ul>
                  {item.subFlightData.map((subFlight, key) => {
                    return (
                      <SubFlight
                        className="connectingFlightsInfo"
                        key={key}
                        index={key}
                        subFlight={subFlight}
                        layOverTime={item.layOverTime}
                      />
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightData;
