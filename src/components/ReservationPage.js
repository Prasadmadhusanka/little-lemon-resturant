import BookingForm from "./BookingForm";

function ReservationPage({ availableTimes, updateTimes }) {
  return (
    <div>
      {/* Pass availableTimes to BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      ></BookingForm>
    </div>
  );
}

export default ReservationPage;
