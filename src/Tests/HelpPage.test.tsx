import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelpPage from "../components/HelpPage";

describe("HelpPage Component", () => {
  let mockBackToStart: jest.Mock<any, any, any>;
  
  beforeEach(() => {
    mockBackToStart = jest.fn();
    render(<HelpPage onBackToStart={mockBackToStart} />);
  });

  test("test exepted titels  ", () => {
    expect(
      screen.getByText(/How to Play Trivia Music Game/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Getting Started/i)).toBeInTheDocument();
    expect(screen.getByText(/Tips for Success/i)).toBeInTheDocument();
    expect(screen.getByText(/Game Rules/i)).toBeInTheDocument();
  });

  test('calls "onBackToStart" prop when "Back to Start" button is clicked', () => {
    fireEvent.click(screen.getByRole("button", { name: /back to start/i }));
    expect(mockBackToStart).toHaveBeenCalled();
  });
  test("test background style", () => {
    const backgroundImageDiv = screen.getByTestId("background-image-div");
    expect(backgroundImageDiv).toHaveStyle(
      `backgroundImage: url(${backgroundImageDiv})`,
    );
  });
});
