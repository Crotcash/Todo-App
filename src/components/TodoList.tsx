import React, { useState } from 'react';
import { Task } from '../types/Task';
import '../App.css';

let idCounter = 0;

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

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

  const startEditing = (id: number, currentText: string) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const saveEdit = () => {
    if (editingId !== null && editText.trim()) {
      setTasks(tasks.map(task =>
        task.id === editingId ? { ...task, text: editText.trim() } : task
      ));
      setEditingId(null);
      setEditText('');
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input-container">
        <input
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            {editingId === task.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ flexGrow: 1 }}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  className={`todo-text ${task.completed ? 'completed' : ''}`}
                >
                  {task.text}
                </span>
                <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
