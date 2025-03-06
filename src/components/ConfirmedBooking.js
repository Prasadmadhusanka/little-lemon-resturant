import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const location = useLocation();
  const { state } = location; // Get the passed state (reservation details)

  if (!state) {
    return <p>Error: Reservation details not found.</p>; // Handle missing data
  }
  return (
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your reservation. We look forward to serving you!</p>
      <div>
        <h3>Your Reservation Details:</h3>
        <p>Date: {state.date}</p>
        <p>Time: {state.time}</p>
        <p>Guests: {state.guests}</p>
        <p>Occasion: {state.occasion}</p>
      </div>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default ConfirmedBooking;
