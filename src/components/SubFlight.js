import React from "react";
import { getFlightDuration } from "../utility/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faSms } from "@fortawesome/free-solid-svg-icons";

const SubFlight = ({ subFlight }) => {
  const {
    name,
    flightNo,
    departureTime,
    origin,
    destination,
    arrivalTime
  } = subFlight;
  return (
    <li>
      <div className="imgWrapper">
        <FontAwesomeIcon icon={faSms} />
      </div>
      <div className="listInner">
        <h2 className="flighCompany">{name}</h2>
        <span className="flighNumber">{flightNo}</span>
      </div>
      <div className="listInner">
        <h2 className="departureInfo">{departureTime}</h2>
        <span className="flightOrigin">{origin}</span>
      </div>
      <div className="listInner">
        <h2 className="destinationInfo">{arrivalTime}</h2>
        <span className="flightDestination">{destination}</span>
      </div>
      <div className="listInner">
        <h2 className="flightDuration">{getFlightDuration(departureTime, arrivalTime)}</h2>
      </div>
    </li>
  );
};
export default SubFlight;