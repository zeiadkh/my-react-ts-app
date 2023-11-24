// src/components/TaskList.tsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleComplete } from '../store/actions/tasksActions';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const categories = Array.from(new Set(tasks.map((task: any) => task.category)));
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleDelete = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleComplete = (taskId: number) => {
    dispatch(toggleComplete(taskId));
  };

  const handleEdit = (taskId: number) => {
    // Set the edit index to enable editing for the selected task
    setEditIndex(taskId);
  };

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <label>
          Filter by Category:
          <select>
            <option value="">All</option>
            {categories.map((category: any, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ListGroup>
        {tasks.map((task: any, index:number) => (
          <ListGroup.Item key={index} className={task.completed ? 'completed' : ''}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Category: {task.category}</p>
            <Button
              variant={task.completed ? 'outline-secondary' : 'success'}
              onClick={() => handleToggleComplete(index)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button variant="danger" onClick={() => handleDelete(index)}>
              Delete
            </Button>
            <Button variant="info" onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>
              Edit
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Render TaskForm with editIndex as a prop when editing is enabled */}
      {editIndex !== null && <TaskForm editIndex={editIndex} />}
    </div>
  );
};

export default TaskList;
