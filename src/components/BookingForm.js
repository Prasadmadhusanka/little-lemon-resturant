import { useState } from "react";

function BookingForm({ availableTimes, updateTimes }) {
  // Define state for form fields
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
    setFormData({ ...formData, date: newDate });
    // Dispatch state change to update available times based on selected date
    updateTimes(newDate);
  };

  // Handle form submission (can be connected to an API later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Details:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="res-date">Choose date *</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={handleDateChange} // Use custom handler for date change
        required
      />
      <label for="res-time">Choose time *</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select a time
        </option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label for="guests">Number of guests *</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        required
      />
      <label for="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;