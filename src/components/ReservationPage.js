import BookingForm from "./BookingForm";

function ReservationPage({ availableTimes, dispatch }) {
  return (
    <div>
      {/* Pass availableTimes to BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      ></BookingForm>
    </div>
  );
}

export default ReservationPage;
