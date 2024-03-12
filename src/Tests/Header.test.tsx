import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

describe("Header Component", () => {
    const mockBackToStart=jest.fn();
    const totalQuestions = 10;

    beforeEach(() => {
        mockBackToStart.mockClear();
        render(<Header onBackToStart={mockBackToStart}  />);
    
      });
      for (let currentQuestionIndex = 0; currentQuestionIndex < totalQuestions; currentQuestionIndex++) {
        test(`displays the correct question index (${currentQuestionIndex + 1} of ${totalQuestions})`, () => {
          render(<Header onBackToStart={mockBackToStart} currentQuestionIndex={currentQuestionIndex} totalQuestions={totalQuestions} />);
          expect(screen.getByText(`${currentQuestionIndex + 1}/${totalQuestions}`)).toBeInTheDocument();
        });
    
        test('calls "onBackToStart" prop when "Back to Start" button is clicked', () => {
            fireEvent.click(screen.getByRole("button", { name: /back to start/i }));
            expect(mockBackToStart).toHaveBeenCalled();
          }); 

        };
    })   
        
          
        
    
