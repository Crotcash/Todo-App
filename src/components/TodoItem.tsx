import React from 'react';
import { Task } from '../types/Task';

type TodoItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
