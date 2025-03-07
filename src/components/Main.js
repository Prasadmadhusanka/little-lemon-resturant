import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import ReservationPage from "./ReservationPage";
import Menu from "./Menu";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/api"; // Import the fetchAPI function
import ConfirmedBooking from "./ConfirmedBooking"; // Import the new page

// Function to initialize available times for today
const initializeTimes = () => {
  const today = new Date(); // Get today's date
  return fetchAPI(today); // Fetch available times for today
};

// Reducer function to update available times based on selected date
function timeReducer(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return fetchAPI(action.date); // Fetch available times based on selected date
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes());
  const navigate = useNavigate(); // Hook for navigation

  // Function to update available times based on the selected date
  const updateTimes = (selectedDate) => {
    // Dispatch an action to update times based on the date
    dispatch({ type: "SET_TIMES", date: selectedDate });
  };

  // Submit the form and navigate on success
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmation", { state: formData }); // Redirect to confirmation page
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservation"
          element={
            <ReservationPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm} // Pass submitForm to BookingForm
            />
          }
        />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </main>
  );
}

export default Main;
