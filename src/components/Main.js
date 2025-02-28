import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ReservationPage from "./ReservationPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </main>
  );
}

export default Main;
