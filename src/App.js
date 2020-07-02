import React, { useState, useEffect } from 'react';
import './App.css';
import FlightData from './FlightData';

function App() {
  // check wheather any need of adding async await and loaders 
  // const [isLoading, setIsLoading] = useState(false);
  const [flightData, setFlightData] = useState([]);

  useEffect(()=> {
    console.log('dsdsd')
    fetch(`https://tw-frontenders.firebaseio.com/advFlightSearch.json`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(response => {
      setFlightData(response);
      console.log(response)
    })
    .catch(error => {
      console.log(console.error); // handle error more efficiently later
    })
  }, []);

  return (
    <div className="app">
      <div className="appHeader">
        Flight Search App
      </div>
      <div className="appContent">
        <FlightData id="flight-data" data={flightData}/>
      </div>
    </div>
  );
};

export default App;
