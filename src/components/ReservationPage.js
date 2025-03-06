import BookingForm from "./BookingForm";

function ReservationPage({ availableTimes, updateTimes, submitForm }) {
  return (
    <div>
      {/* Pass availableTimes to BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm} // Pass submitForm
      ></BookingForm>
    </div>
  );
}

export default ReservationPage;
