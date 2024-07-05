import { useEffect, useState } from "react";
import './styles/AddTrains.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// get train by train number function to add
function AddTrains() {
  const [trainName, setTrainName] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [sourceArrival, setSourceArrival] = useState('');
  const [sourceDeparture, setSourceDeparture] = useState('');
  const [destinationArrival, setDestinationArrival] = useState('');
  const [destinationDeparture, setDestinationDeparture] = useState('');
  const [trains, setTrains] = useState([]);
  const [visibleTrains, setVisibleTrains] = useState(3);

  const navigate = useNavigate();

  // Fetch the list of trains from the API
  const fetchTrains = async () => {
    const url = "https://localhost:7094/api/AdminLogin/TrainDetails";
    const token = localStorage.getItem('adminToken');

    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setTrains(response.data);
    } catch (error) {
      console.error('There was an error fetching trains!', error);
    }
  };

  useEffect(() => {
    fetchTrains();
  }, []);

  const handleSave = async (event) => {
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

    try {
      const result = await axios.post(url, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
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
      // Fetch the updated list of trains
      fetchTrains();
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error creating train: ' + error.message);
    }
  };

  const handleUpdate = (trainNumber) => {
    navigate(`/update-train/${trainNumber}`);
  };

  const handleDelete = async (trainNumber) => {
    const url = `https://localhost:7094/api/TrainDetails/Delete/${encodeURIComponent(trainNumber)}`;
    const token = localStorage.getItem('adminToken');

    try {
      const result = await axios.delete(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      alert(result.data);
      // Fetch the updated list of trains
      fetchTrains();
    } catch (error) {
      console.error('There was an error deleting the train!', error);
      alert('Error deleting train: ' + error.message);
    }
  };

  const showMore = () => {
    setVisibleTrains(prevVisibleTrains => prevVisibleTrains + 3);
  };

  const showLess = () => {
    setVisibleTrains(3);
  };

  const handleManageSeats = (trainNumber) => {
    navigate(`/manage-seats/${trainNumber}`);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Add Trains</h1>
        <div className="card-container">
          {trains.slice(0, visibleTrains).map((train, index) => (
            <div className="card train-card" key={index}>
              <h2>{train.trainName}</h2>
              <p>Number: {train.trainNumber}</p>
              <p>Source: {train.source}</p>
              <p>Destination: {train.destination}</p>
              <p>Source Arrival: {train.sourceArrival}</p>
              <p>Source Departure: {train.sourceDeparture}</p>
              <p>Destination Arrival: {train.destinationArrival}</p>
              <p>Destination Departure: {train.destinationDeparture}</p>
              <div className="button-container">
                <button className="update-button" onClick={() => handleUpdate(train.trainNumber)}>Update</button>
                <button className="delete-button" onClick={() => handleDelete(train.trainNumber)}>Delete</button>
                <button onClick={() => handleManageSeats(train.trainNumber)}>Add/Delete seat</button>
              </div>
            </div>
          ))}
          <div className="card add-train-card">
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label htmlFor="tname">Train Name</label>
                <input type="text" id="tname" name="tname" value={trainName} onChange={(e) => setTrainName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="tnumber">Train Number</label>
                <input type="text" id="tnumber" name="tnumber" value={trainNumber} onChange={(e) => setTrainNumber(e.target.value)} />
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
              <button type="submit">Add Train</button>
            </form>
          </div>
        </div>
        {trains.length > 3 && (
          <div className="show-buttons">
            {visibleTrains < trains.length && (
              <button className="show-more" onClick={showMore}>Show More</button>
            )}
            {visibleTrains > 3 && (
              <button className="show-less" onClick={showLess}>Show Less</button>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default AddTrains;
