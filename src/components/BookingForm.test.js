import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);
  
  // Check if the heading "Reservation Page" is present
  const headingElement = screen.getByText("Reservation Page");
  expect(headingElement).toBeInTheDocument();
});

test("Renders 'Choose date' label", () => {
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);

  const labelElement = screen.getByLabelText(/Choose date/i);
  expect(labelElement).toBeInTheDocument();
});
