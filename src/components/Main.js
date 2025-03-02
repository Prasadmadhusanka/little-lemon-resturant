import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ReservationPage from "./ReservationPage";
import { useReducer } from "react";

// Function to initialize available times
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

// Reducer function to update available times based on selected date
function timeReducer(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return initializeTimes(); // Future improvement: Modify based on date
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
