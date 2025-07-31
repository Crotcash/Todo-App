import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// Update the import path below to the correct relative path for your TodoList component
import TodoList from '../components/TodoList';

test('adds a task and displays it', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText(/add a task/i);
  const addButton = screen.getByText(/add/i);

  // Simulate typing and clicking
  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  // Expect the task to appear in the list
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});
