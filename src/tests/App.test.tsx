import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('deletes a task when delete button is clicked', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText(/add a task/i);
  const addButton = screen.getByText(/add/i);

  // Add a task
  fireEvent.change(input, { target: { value: 'Delete Task' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByLabelText('Delete task Delete Task');
  fireEvent.click(deleteButton);


  
  expect(screen.queryByText('Delete Task')).not.toBeInTheDocument();
});

