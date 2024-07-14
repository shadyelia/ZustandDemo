import {  act, fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import CounterOperations from "./CounterOperations";
import { useCounterStore } from "../../appStore";

describe("CounterOperations tests", () => {

  beforeEach(()=> {
    useCounterStore.setState({
      counter: 22
    });
  })

  it("Should increase the counter", async () => {
    //Act
    render(<CounterOperations />);

    await act(async () => {
      fireEvent.click(screen.getByText("increase"));
    });

    //Assert
    expect(useCounterStore.getState().counter).toBe(23);
  });
});
