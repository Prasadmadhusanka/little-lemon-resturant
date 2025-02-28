import BookingForm from "./BookingForm";

function ReservationPage({ availableTimes, updateTimes }) {
  return (
    <div>
      <h3>Reservation Page</h3>
      {/* Pass availableTimes to BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      ></BookingForm>
    </div>
  );
}

export default ReservationPage;
