import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/ManageUserPage.css';
import axios from "axios";
import { Link } from "react-router-dom";

function ManageUserPage() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trainDetails, setTrainDetails] = useState([]);
  const [seatCounts, setSeatCount] = useState({
    "1AC": 0,
    "2AC": 0,
    "3AC": 0,
    "Sleeper": 0,
    "General": 0
  });
  const [lastClickedButton, setLastClickedButton] = useState('');
  const [clickedTrainNumber, setClickedTrainNumber] = useState('');
  const navigate = useNavigate();

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

  const fetchSeatCount = async (trainNumber, seatType) => {
    const url = `https://localhost:7094/api/Search/GetTotalSeats?trainNumber=${encodeURIComponent(trainNumber)}&seatType=${encodeURIComponent(seatType)}`;
    try {
      const response = await axios.post(url);
      const count = response.data;
      setSeatCount(prevCounts => ({
        ...prevCounts,
        [seatType]: count
      }));
    } catch (error) {
      console.log(`Error fetching ${seatType} seat count`, error);
      alert(`Error fetching ${seatType} seat count: ${error.message}`);
    }
  };

  const handleSeatButtonClick = (trainNumber, seatType) => {
    if (lastClickedButton === seatType && clickedTrainNumber === trainNumber) {
      navigate(`/reservation/${trainNumber}/${seatType}`);
    } else {
      setLastClickedButton(seatType);
      setClickedTrainNumber(trainNumber);
      fetchSeatCount(trainNumber, seatType);
    }
  };

  return (
    <div className="container">
      {/* <Sidebar /> */}
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
          <Link to="/cancelticket"> <button>Cancel Ticket</button> </Link>
        </form>
        
      </header>
      {trainDetails.length > 0 && (
        <div className="train-details">
          <h2>Available Trains</h2>
          <table className="table">
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
              {trainDetails.map((train) => (
                <tr key={train.trainNumber}>
                  <td>{train.trainName}</td>
                  <td>{train.trainNumber}</td>
                  <td>{train.source}</td>
                  <td>{train.sourceDeparture}</td>
                  <td>{train.destination}</td>
                  <td>{train.destinationArrival}</td>
                  <td>
                    <div className="button-group">
                      <button className="class-button" onClick={() => handleSeatButtonClick(train.trainNumber, "1AC")}>
                        {lastClickedButton === "1AC" && clickedTrainNumber === train.trainNumber ? seatCounts["1AC"] : "1AC"}
                      </button>
                      <button className="class-button" onClick={() => handleSeatButtonClick(train.trainNumber, "2AC")}>
                        {lastClickedButton === "2AC" && clickedTrainNumber === train.trainNumber ? seatCounts["2AC"] : "2AC"}
                      </button>
                      <button className="class-button" onClick={() => handleSeatButtonClick(train.trainNumber, "3AC")}>
                        {lastClickedButton === "3AC" && clickedTrainNumber === train.trainNumber ? seatCounts["3AC"] : "3AC"}
                      </button>
                      <button className="class-button" onClick={() => handleSeatButtonClick(train.trainNumber, "Sleeper")}>
                        {lastClickedButton === "Sleeper" && clickedTrainNumber === train.trainNumber ? seatCounts["Sleeper"] : "Sleeper"}
                      </button>
                      <button className="class-button" onClick={() => handleSeatButtonClick(train.trainNumber, "General")}>
                        {lastClickedButton === "General" && clickedTrainNumber === train.trainNumber ? seatCounts["General"] : "General"}
                      </button>
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
