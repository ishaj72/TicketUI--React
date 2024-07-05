import { useState } from "react";
import './styles/ManageUserPage.css';
import axios from "axios";

function ManageUserPage() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trainDetails, setTrainDetails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://localhost:7094/api/Search/Search?source=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}`;

    try {
      const response = await axios.post(url);
      console.log("Response data:", response.data); 
      const data = Array.isArray(response.data) ? response.data : [response.data];
      setTrainDetails(data);
    } catch (error) {
      console.log("Error fetching details:", error);
      alert('Error fetching train details: ' + error.message);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Find Trains</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="source">Source</label>
            <input type="text" id="source" name="source" value={source} onChange={(e) => setSource(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input type="text" id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required />
          </div>
          <button type="submit">Search Trains</button>
        </form>
      </header>
      {trainDetails.length > 0 && (
        <div className="train-details">
          <h2>Available Trains</h2>
          <table className = "table">
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Train Number</th>
                <th>Source</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Arrival</th>
                <th>Classes</th>
              </tr>
            </thead>
            <tbody>
              {trainDetails.map((train)=>(
                <tr key={train.trainNumber}>
                  <td>{train.trainName}</td>
                  <td>{train.trainNumber}</td>
                  <td>{train.source}</td>
                  <td>{train.sourceDeparture}</td>
                  <td>{train.destination}</td>
                  <td>{train.destinationArrival}</td>
                  <td>
                    <div>
                    <button className="class-button">1AC</button>
                      <button className="class-button">2AC</button>
                      <button className="class-button">3AC</button>
                      <button className="class-button">Sleeper</button>
                      <button className="class-button">General</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ManageUserPage;
