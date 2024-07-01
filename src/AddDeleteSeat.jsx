import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AddDeleteSeat() {
  const { trainNumber } = useParams();
  const [seatNumber, setSeatNumber] = useState('');
  const [seatType, setSeatType] = useState('');
  const [seatStatus, setSeatStatus] = useState('');

  const handleAddSeat = async (event) => {
    event.preventDefault();

    const data = {
      seatNumber: parseInt(seatNumber),
      seatType,
      seatStatus: seatStatus || "Not Reserved", // Ensure default value for seatStatus
      trainNumber: parseInt(trainNumber)
    };

    const url = "https://localhost:7094/api/SeatDetails/AddSeat";
    const token = localStorage.getItem('adminToken');

    try {
      const result = await axios.post(url, data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      alert("Seat added successfully.");
      setSeatNumber('');
      setSeatType('');
      setSeatStatus('');
    } catch (error) {
      console.error('Error adding seat:', error);
      alert('Error adding seat: ' + error.message);
    }
  };

  const handleDeleteSeat = async () => {
    const url = `https://localhost:7094/api/SeatDetails/DeleteSeat/${encodeURIComponent(seatNumber)}`;
    const token = localStorage.getItem('adminToken');

    try {
      const result = await axios.delete(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      alert(result.data);
      setSeatNumber('');
    } catch (error) {
      console.error('Error deleting seat:', error);
      alert('Error deleting seat: ' + error.message);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Manage Seats for Train {trainNumber}</h1>
        <form onSubmit={handleAddSeat}>
          <div className="form-group">
            <label htmlFor="seatNumber">Seat Number</label>
            <input type="text" id="seatNumber" name="seatNumber" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="seatType">Seat Type</label>
            <select id="seatType" name="seatType" value={seatType} onChange={(e) => setSeatType(e.target.value)} >
              <option value="">Select Seat Type</option>
              <option value="Sleeper">Sleeper</option>
              <option value="1AC">1AC</option>
              <option value="2AC">2AC</option>
              <option value="3AC">3AC</option>
              <option value="General">General</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="seatStatus">Seat Status</label>
            <input type="text" id="seatStatus" name="seatStatus" value={seatStatus} onChange={(e) => setSeatStatus(e.target.value)} placeholder="Not Reserved"/>
          </div>
          <button type="submit">Add Seat</button>
        </form>
        <button onClick={handleDeleteSeat}>Delete Seat</button>
      </header>
    </div>
  );
}

export default AddDeleteSeat;
