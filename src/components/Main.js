import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ReservationPage from "./ReservationPage";
import { useReducer } from "react";
import { fetchAPI } from "../utils/api"; // Import the fetchAPI function

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

  // Function to update available times based on the selected date
  const updateTimes = (selectedDate) => {
    // Dispatch an action to update times based on the date
    dispatch({ type: "SET_TIMES", date: selectedDate });
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
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
