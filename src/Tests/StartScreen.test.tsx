import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartScreen from '../components/StartScreen'; 

describe('StartScreen Component', () => {
  const mockOnStartGame = jest.fn();
  const mockHelp = jest.fn();
  const dynamicHighScore = Math.floor(Math.random() * 100); 

  beforeEach(() => {
    mockOnStartGame.mockClear();
    mockHelp.mockClear();
    render(<StartScreen onStartGame={mockOnStartGame} help={mockHelp} highScore={dynamicHighScore} />);

  });

  test('renders the start and help buttons, and displays the high score dynamically', () => {
    expect(screen.getByText('Start Playing')).toBeInTheDocument();
    expect(screen.getByText('Help Playing')).toBeInTheDocument();
    expect(screen.getByText(`High Score: ${dynamicHighScore}`)).toBeInTheDocument();
  });

  test('calls onStartGame when the "Start Playing" button is clicked', () => {
    fireEvent.click(screen.getByText('Start Playing'));
    expect(mockOnStartGame).toHaveBeenCalled();
  });

  test('calls help when the "Help Playing" button is clicked', () => {
    fireEvent.click(screen.getByText('Help Playing'));
    expect(mockHelp).toHaveBeenCalled();
  });
});
