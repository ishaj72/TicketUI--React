import { useState } from "react";
import axios from "axios";

function Cancellation() {
    const [pnr, setPnr] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://localhost:7094/api/User/CancelTicket?pnr=${encodeURIComponent(pnr)}`;
        try {
            const response = await axios.delete(url);
            console.log("Response data:", response.data);
            alert('Ticket cancelled successfully');
        } catch (error) {
            console.error("Error cancelling ticket:", error);
            alert('Error cancelling ticket: ' + error.message);
        }
    };

    return (
        <div>
            <div>
                <h1>Cancel Ticket</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cancellation">Enter PNR to cancel the ticket:</label>
                <input type="text" id="cancellation" name="cancellation" value={pnr} onChange={(e) => setPnr(e.target.value)} required />
                <button type="submit">Cancel Ticket</button>
            </form>
        </div>
    );
}

export default Cancellation;
