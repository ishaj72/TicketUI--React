import React, { useState } from "react";
import axios from "axios";

function AddTrains() {
  const [trainName, setTrainName] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [sourceArrival, setSourceArrival] = useState('');
  const [sourceDeparture, setSourceDeparture] = useState('');
  const [destinationArrival, setDestinationArrival] = useState('');
  const [destinationDeparture, setDestinationDeparture] = useState('');

  const handleSave = (event) => {
    event.preventDefault(); // Prevent form submission

    const data = {
      trainName,
      trainNumber,
      source,
      destination,
      sourceArrival,
      sourceDeparture,
      destinationArrival,
      destinationDeparture
    };

    const url = "https://localhost:7094/api/TrainDetails/AddTrain"; 
    const token = localStorage.getItem('adminToken');

    axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((result) => {
        alert(result.data);
        // Clear all input fields after successful submission
        setTrainName('');
        setTrainNumber('');
        setSource('');
        setDestination('');
        setSourceArrival('');
        setSourceDeparture('');
        setDestinationArrival('');
        setDestinationDeparture('');
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Error creating train: ' + error.message);
      });
  };

  return (
    <div>
      <header>
        <div>
          <h1>Add Trains</h1>
          <form onSubmit={handleSave}>
            <div>
              <label htmlFor="tname">Train Name</label>
              <input type="text" id="tname" name="tname" value={trainName} onChange={(e) => setTrainName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="tnumber">Train Number</label>
              <input type="text" id="tnumber" name="tnumber" value={trainNumber} onChange={(e) => setTrainNumber(e.target.value)} />
            </div>
            <div>
              <label htmlFor="source">Source</label>
              <input type="text" id="source" name="source" value={source} onChange={(e) => setSource(e.target.value)} />
            </div>
            <div>
              <label htmlFor="destination">Destination</label>
              <input type="text" id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            <div>
              <label htmlFor="sarrival">Source Arrival</label>
              <input type="text" id="sarrival" name="sarrival" value={sourceArrival} onChange={(e) => setSourceArrival(e.target.value)} />
            </div>
            <div>
              <label htmlFor="sdeparture">Source Departure</label>
              <input type="text" id="sdeparture" name="sdeparture" value={sourceDeparture} onChange={(e) => setSourceDeparture(e.target.value)} />
            </div>
            <div>
              <label htmlFor="darrival">Destination Arrival</label>
              <input type="text" id="darrival" name="darrival" value={destinationArrival} onChange={(e) => setDestinationArrival(e.target.value)} />
            </div>
            <div>
              <label htmlFor="ddeparture">Destination Departure</label>
              <input type="text" id="ddeparture" name="ddeparture" value={destinationDeparture} onChange={(e) => setDestinationDeparture(e.target.value)} />
            </div>
            <button type="submit">Add Train</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default AddTrains;
