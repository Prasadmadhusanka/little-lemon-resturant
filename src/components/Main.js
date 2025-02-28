import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ReservationPage from "./ReservationPage";
import { useReducer } from "react";

// Reducer function to manage available times
function timeReducer(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      // For now, returning the same available times regardless of the date
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
}

// Initial state setup for availableTimes
const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function Main() {
  const [availableTimes, dispatch] = useReducer(timeReducer, initialState);

  // Function to update available times based on the selected date
  const updateTimes = (selectedDate) => {
    // Dispatch an action to update times based on the date
    dispatch({ type: "SET_TIMES", date: selectedDate });
  };

  return (
    <main>
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
