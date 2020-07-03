import React from 'react';

const FlightData = ({
    data, // passed callback prop
  }) => {
        return (
        <div className="itemList">
            <ul>
            {data.map((item, index) =>
                <li key={index}>
                    <div className="imgWrapper">
                        <i className="fa fa-plane planeIcon" aria-hidden="true"></i>
                    </div>
                    <div className="listInner">
                        <h2 className="flighCompany">{item.name}</h2>
                        <a className="flighDetailsLink">show Details</a>
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
                        <h2 className="timeDuration">{parseInt(item.arrivalTime) - parseInt(item.departureTime)}</h2>
                        <a className="typeOfTravel">Non Stop</a>
                    </div>
                    <div>
                        <h2 className="flightPrice">{item.price}</h2>
                    </div>
                    <div>
                        <button className="flightBookButton">Book</button>
                    </div>
                </li>
            )}
            </ul>
        </div>
      );
};

export default FlightData;