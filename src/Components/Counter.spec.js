import {  act, fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import '@testing-library/jest-dom'

describe("Counter tests", () => {
  it("Should increase the counter", async () => {
    //Act
    render(<Counter />);

    await act(async () => {
      fireEvent.click(screen.getByText("increase"));
    });

    //Assert
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });
});
