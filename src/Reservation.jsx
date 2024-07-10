import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './styles/Reservation.css'; // Import CSS file for styling

function Reservation() {
  const { trainNumber, seatType } = useParams();

  const [pnr, setPnr] = useState('');
  const [passengerName, setName] = useState('');
  const [passengerAge, setAge] = useState('');
  const [passengerGender, setGender] = useState('');
  const [seatQuota, setQuota] = useState('');
  const [ticketPrice, setTicketPrice] = useState(0);

  const generatePNR = () => {
    const useChars = '1234567890';
    let pnr = '';
    for (let i = 0; i < 8; i++) {
      pnr += useChars[Math.floor(Math.random() * useChars.length)];
    }
    return pnr;
  };

  const calculateCost = () => {
    let price = 0;
    switch (seatType) {
      case "1AC":
        price = 1940;
        break;
      case "2AC":
        price = 1170;
        break;
      case "3AC":
        price = 1000;
        break;
      case "Sleeper":
        price = 500;
        break;
      default:
        price = 200;
        break;
    }
    return price;
  };

  const bookTickets = async (pnr) => {
    const url = "https://localhost:7094/api/User/BookTickets";
    const token = localStorage.getItem('userToken');

    const ticketDetails = [{
      trainNumber,
      seatType,
      passengerName,
      passengerAge: parseInt(passengerAge, 10),  // Ensure age is a number
      passengerGender,
      seatQuota,
      pnr
    }];

    console.log("Request Payload:", ticketDetails);

    try {
      const response = await axios.post(url, ticketDetails, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log("Response Data:", response.data);
      const bookedTicket = response.data[0];

      if (bookedTicket && bookedTicket.ticketPrice) {
        setTicketPrice(bookedTicket.ticketPrice);
      } else {
        console.error("Unexpected response structure", response.data);
      }
    } catch (error) {
      console.error('There was an error booking ticket', error);
      console.error('Error Details:', error.response?.data);
    }
  };

  const handleBooking = (event) => {
    event.preventDefault();
    const pnr = generatePNR();
    setPnr(pnr);
    const age = parseInt(passengerAge, 10);
    if (!isNaN(age)) {
      setTicketPrice(calculateCost());
      bookTickets(pnr);
    } else {
      alert("Please enter a valid age.");
    }
  };

  return (
    <div className="container">
      <h2>Reservation Details</h2>
      <form onSubmit={handleBooking}>
        <div>
          <label>Passenger Name:</label>
          <input type="text" value={passengerName} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Passenger Age:</label>
          <input
            type="number"
            value={passengerAge}
            onChange={(e) => setAge(e.target.value)}
            onBlur={(e) => setAge(e.target.value)} // Ensure value is updated on blur
          />
        </div>
        <div>
          <label>Passenger Gender:</label>
          <select value={passengerGender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Seat Quota:</label>
          <input type="text" value={seatQuota} onChange={(e) => setQuota(e.target.value)} />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
      {pnr && (
        <div className="ticket-details">
          <h3>Ticket Details</h3>
          <p>PNR: {pnr}</p>
          <p>Passenger Name: {passengerName}</p>
          <p>Passenger Age: {passengerAge}</p>
          <p>Passenger Gender: {passengerGender}</p>
          <p>Seat Quota: {seatQuota}</p>
          <p>Ticket Price: {ticketPrice}</p>
        </div>
      )}
      <div>
        <button className="make-payment-button">MAKE PAYMENT</button>
      </div>
    </div>
  );
}

export default Reservation;
