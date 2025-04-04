import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('should load heading inside contact component', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

test('should load button inside contact component', () => {
  render(<Contact />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('should load input inside contact component', () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText('name');
  expect(inputName).toBeInTheDocument();
});

test('should load 2 input boxes on the contact component', () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole('textbox');
});
