import React from "react";
import { getFlightDuration, convertTime } from "../utility/util";
import directFlightIcon from "../Images/subFlightIcon.png";

const SubFlight = ({ subFlight, layOverTime, index }) => {
  const {
    name,
    flightNo,
    departureTime,
    origin,
    destination,
    arrivalTime,
  } = subFlight;
  return (
    <li>
      <div className="imgWrapper">
        <img className="planeImg" src={directFlightIcon} alt="planeIcon" />
      </div>
      <div className="flightInfo">
        <h2 className="flighCompany">{name}</h2>
        <span className="flighNumber">{flightNo}</span>
      </div>
      <div className="flightInfo">
        <h2 className="departureInfo">{departureTime}</h2>
        <span className="flightOrigin">{origin}</span>
      </div>
      <div className="flightInfo">
        <h2 className="destinationInfo">{arrivalTime}</h2>
        <span className="flightDestination">{destination}</span>
      </div>
      <div className="flightInfo">
        <h2 className="flightDuration">
          {getFlightDuration(departureTime, arrivalTime)}
        </h2>
      </div>
      {index === 0 && (
        <p className="layOverTime">
          Layover Time :: {convertTime(layOverTime)}
        </p>
      )}
    </li>
  );
};
export default SubFlight;
