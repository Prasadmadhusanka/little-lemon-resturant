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

test("date input has required attribute", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
});

test("guests input has min and max attributes", () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("time input has required attribute", () => {
  render(<BookingForm />);
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toHaveAttribute("required");
});

// Sample validation function for the guests input
const validateGuests = (guests) => {
  if (guests < 1 || guests > 10) {
    return "Number of guests must be between 1 and 10.";
  }
  return "";
};

test("valid guests input returns empty string", () => {
  const errorMessage = validateGuests(5); // Valid input
  expect(errorMessage).toBe("");
});

test("invalid guests input returns error message", () => {
  const errorMessage = validateGuests(0); // Invalid input
  expect(errorMessage).toBe("Number of guests must be between 1 and 10.");
});

test("form cannot be submitted when there is an invalid guests input", () => {
  render(<BookingForm />);

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "0" } }); // Invalid value

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });
  expect(submitButton).toBeDisabled();
});
