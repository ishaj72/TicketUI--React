import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './styles/AddTrains.css';
import axios from "axios";

function UpdateTrain() {
  const { trainNumber } = useParams();
  const navigate = useNavigate();

  const [trainName, setTrainName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [sourceArrival, setSourceArrival] = useState('');
  const [sourceDeparture, setSourceDeparture] = useState('');
  const [destinationArrival, setDestinationArrival] = useState('');
  const [destinationDeparture, setDestinationDeparture] = useState('');

  useEffect(() => {
    const fetchTrainDetails = async () => {
      const url = `https://localhost:7094/api/TrainDetails/GetTrainByNumber/${encodeURIComponent(trainNumber)}`;
      const token = localStorage.getItem('adminToken');

      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const train = response.data;
        setTrainName(train.trainName);
        setSource(train.source);
        setDestination(train.destination);
        setSourceArrival(train.sourceArrival);
        setSourceDeparture(train.sourceDeparture);
        setDestinationArrival(train.destinationArrival);
        setDestinationDeparture(train.destinationDeparture);
      } catch (error) {
        console.error('There was an error fetching the train details!', error);
      }
    };

    fetchTrainDetails();
  }, [trainNumber]);

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedTrain = {
      trainName,
      trainNumber,
      source,
      destination,
      sourceArrival,
      sourceDeparture,
      destinationArrival,
      destinationDeparture
    };

    const url = `https://localhost:7094/api/TrainDetails/UpdateTrain/${encodeURIComponent(trainNumber)}`;
    const token = localStorage.getItem('adminToken');

    axios.put(url, updatedTrain, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((result) => {
        alert(result.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error updating the train!', error);
        alert('Error updating train: ' + error.message);
      });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Update the values for Train Number {trainNumber}</h1>
        <div className="card add-train-card">
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="tname">Train Name</label>
              <input type="text" id="tname" name="tname" value={trainName} onChange={(e) => setTrainName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="source">Source</label>
              <input type="text" id="source" name="source" value={source} onChange={(e) => setSource(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input type="text" id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="sarrival">Source Arrival</label>
              <input type="text" id="sarrival" name="sarrival" value={sourceArrival} onChange={(e) => setSourceArrival(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="sdeparture">Source Departure</label>
              <input type="text" id="sdeparture" name="sdeparture" value={sourceDeparture} onChange={(e) => setSourceDeparture(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="darrival">Destination Arrival</label>
              <input type="text" id="darrival" name="darrival" value={destinationArrival} onChange={(e) => setDestinationArrival(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="ddeparture">Destination Departure</label>
              <input type="text" id="ddeparture" name="ddeparture" value={destinationDeparture} onChange={(e) => setDestinationDeparture(e.target.value)} />
            </div>
            <button type="submit">Update Train</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default UpdateTrain;
