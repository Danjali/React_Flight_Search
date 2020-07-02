import React from 'react';

const FlightData = ({
    data, // passed callback prop
  }) => {
    console.log(data);
        return (
        <div className="itemList">
            <ul>
            {data.map((item, index) =>
                <li key={index}>
                    <div className="listInner">
                        <h2>{item.name}</h2>
                        <a>show Details</a>
                    </div>
                    <div className="listInner">
                        <h2>{item.departureTime}</h2>
                        <span>{item.origin}</span>
                    </div>
                    <div className="listInner">
                        <h2>{item.arrivalTime}</h2>
                        <span>{item.destination}</span>
                    </div>
                    <div className="listInner">
                        <h2>{parseInt(item.arrivalTime) - parseInt(item.departureTime)}</h2>
                        <a>Non Stop</a>
                    </div>
                    <div>
                        <h2>{item.price}</h2>
                    </div>
                    <div>
                        <button className="bookButton">Book</button>
                    </div>
                </li>
            )}
            </ul>
        </div>
      );
};

export default FlightData;