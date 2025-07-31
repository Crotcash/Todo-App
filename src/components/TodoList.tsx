import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Task } from '../types/Task';

let idCounter = 0;

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      const newTask: Task = {
        id: ++idCounter,
        text: input.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
