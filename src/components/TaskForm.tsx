// src/components/TaskForm.tsx

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../store/actions/tasksActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface TaskFormProps {
  editIndex?: number | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ editIndex }: any) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: '',
  });

  useEffect(() => {
    if (editIndex !== null && tasks[editIndex ]) {
      setTask(tasks[editIndex]);
    }
  }, [editIndex, tasks]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editIndex !== null && tasks[editIndex]) {
      dispatch(updateTask(editIndex, task));
    } else {
      dispatch(addTask(task));
    }

    setTask({ title: '', description: '', dueDate: '', category: '' });
  };

  const handleCancelEdit = () => {
    setTask({ title: '', description: '', dueDate: '', category: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter due date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          name="category"
          value={task.category}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ margin: '10px' }}>
        {editIndex !== null ? 'Update Task' : 'Add Task'}
      </Button>

      {editIndex !== null && (
        <Button variant="danger" onClick={handleCancelEdit} style={{ margin: '10px' }}>
          Cancel Edit
        </Button>
      )}
    </Form>
  );
};

export default TaskForm;
