import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData({ ...formData, date: newDate, time: "" });

    // Dispatch action to update available times
    dispatch({ type: "SET_TIMES", date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time) {
      alert("Please select a time for your reservation.");
      return;
    }
    console.log("Reservation Details:", formData);
  };

  return (
    <div>
      <h3>Reservation Page</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date *</label>
        <input
          type="date"
          id="res-date"
          value={formData.date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="res-time">Choose time *</label>
        <select
          id="res-time"
          value={formData.time}
          onChange={handleChange}
          required
          disabled={!availableTimes.length}
        >
          <option value="" disabled>
            {availableTimes.length ? "Select a time" : "No available times"}
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests *</label>
        <input
          type="number"
          min="1"
          max="10"
          id="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formData.occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
