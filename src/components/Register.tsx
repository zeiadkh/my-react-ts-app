// src/components/auth/Registration.tsx

import React, { useState } from 'react';
import { connect } from 'react-redux';
import  {register}  from '../store/actions/authActions';

interface RegistrationProps {
  register: (data: { username: string; password: string }) => void;
}

const Registration: React.FC<RegistrationProps> = ({ register }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default connect(null, { register })(Registration);
