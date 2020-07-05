import React from "react";
import SubFlight from "./SubFlight";
import { convertTime, getFlightDuration } from "../utility/util";
import {
  faPlane,
  faSms,
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FlightData = ({
  data,
  setShowHideDetails,
  isOneWayFlight, // passed callback prop
}) => {
  return (
    <div className="itemList">
      <ul>
        {data.map((item, index) => (
          <li key={index}>
             <div className="imgWrapper">
                <FontAwesomeIcon icon={item.isMultiLine ? faPlane : faSms} />
              </div>
            <div className="listInner">
              <div>
                <h2 className="flighCompany">
                  {item.isMultiLine ? "Multiple" : item.name}
                </h2>
                {item.isMultiLine ? (
                  <a
                    href="#"
                    className="flighDetailsLink"
                    onClick={() => setShowHideDetails(index, data, !isOneWayFlight)}
                  >
                    {item.showSubFlights ? "Hide" : "Show"} Details
                  </a>
                ) : (
                  <a className="flightNo">{item.flightNo}</a>
                )}
              </div>
            </div>
            <div className="listInner">
              <h2 className="departureInfo">{item.departureTime}</h2>
              <span className="flightOrigin">{item.origin}</span>
            </div>
            <div className="listInner">
              <h2 className="destinationInfo">{item.arrivalTime}</h2>
              <span className="flightDestination">{item.destination}</span>
            </div>
            <div className="listInner">
              <h2 className="timeDuration">
                {getFlightDuration(item.departureTime, item.arrivalTime)}
              </h2>
              <a className="typeOfTravel">{item.isMultiLine ? 'Total Duration': 'Non Stop'}</a>
            </div>
            <div>
              <h2 className="flightPrice">{item.price}</h2>
            </div>
            <div>
              <button className="flightBookButton">Book</button>
            </div>
            {item.isMultiLine && item.showSubFlights &&(
              <div>
                <p className="layOverTime">Layover Time :: {convertTime(item.layOverTime)}</p>
                <ul>
                  {item.subFlightData.map((subFlight, key) => {
                    return <SubFlight className="connectingFlightsInfo" key={key} subFlight={subFlight}/>;
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
