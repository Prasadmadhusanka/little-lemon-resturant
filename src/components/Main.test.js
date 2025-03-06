import { initializeTimes } from "./Main";
import { fetchAPI } from "../utils/api";

// Mock the fetchAPI function
jest.mock("../utils/api");

describe("initializeTimes", () => {
  it("should return available times for today", async () => {
    // Mock the fetchAPI to return a non-empty array of booking times
    fetchAPI.mockResolvedValueOnce(["10:00 AM", "12:00 PM", "02:00 PM"]);

    const result = await initializeTimes(); // Call the function that uses fetchAPI

    // Check if the returned times are the same as the mocked value
    expect(result).toEqual(["10:00 AM", "12:00 PM", "02:00 PM"]);
  });

  it("should return an empty array if no times are available", async () => {
    // Mock fetchAPI to return an empty array
    fetchAPI.mockResolvedValueOnce([]);

    const result = await initializeTimes(); // Call the function that uses fetchAPI

    // Check if the result is an empty array
    expect(result).toEqual([]);
  });
});

describe("updateTimes", () => {
  it("should dispatch the correct action and update available times", async () => {
    // Mock the fetchAPI to return available times based on the selected date
    fetchAPI.mockResolvedValueOnce(["10:00 AM", "12:00 PM", "02:00 PM"]);

    // Initial state (before date change)
    const initialState = [];

    // Simulate dispatching the action to update times
    const action = { type: "SET_TIMES", date: "2025-03-06" }; // Example date
    const newState = await timeReducer(initialState, action); // Simulate the reducer running

    // Check if the new state is the updated times
    expect(newState).toEqual(["10:00 AM", "12:00 PM", "02:00 PM"]);
  });

  it("should return an empty array if no times are available", async () => {
    // Mock fetchAPI to return an empty array (no available times)
    fetchAPI.mockResolvedValueOnce([]);

    // Initial state (before date change)
    const initialState = [];

    // Simulate dispatching the action to update times
    const action = { type: "SET_TIMES", date: "2025-03-06" }; // Example date
    const newState = await timeReducer(initialState, action); // Simulate the reducer running

    // Check if the new state is an empty array
    expect(newState).toEqual([]);
  });
});
