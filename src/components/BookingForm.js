import { useState, useEffect } from "react";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log("Updating:", id, "with value:", value);

    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // Make sure time is properly updated
    }));
  };

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData({ ...formData, date: newDate, time: "" });

    // Call updateTimes to update available times based on the new date
    updateTimes(new Date(newDate)); // Convert the string date to a Date object
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time) {
      alert("Please select a time for your reservation.");
      return;
    }
    console.log("Reservation Details:", formData);

    submitForm(formData); // Call submitForm with form data
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
          min={new Date().toISOString().split("T")[0]}
        />

        <label htmlFor="time">Choose time *</label>
        <select
          id="time"
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

        <input
          type="submit"
          value="Make Your Reservation"
          aria-label="Submit your reservation"
        />
      </form>
    </div>
  );
}

export default BookingForm;
