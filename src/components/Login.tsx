// src/components/auth/Login.tsx

import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  {login}  from '../store/actions/authActions';

interface LoginProps {
  login: (data: { username: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ login }) => {
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
    login(formData);
  };

  
    
    
      return (
        <div className=' d-flex justify-content-center align-items-center vh-100'>

          <Form onSubmit={handleSubmit} className='w-50 bg-black text-center p-4' style={{borderRadius: '6px', color: "White"}}>
            <Form.Group className="mb-3 p-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3 p-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <Button className="m-3" variant="primary" type="submit">
              Submit
            </Button>
      </Form>
    </div>
      );
    
  }
    
    
  


export default connect(null, { login })(Login);
