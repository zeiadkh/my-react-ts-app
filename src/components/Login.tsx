// src/components/auth/Login.tsx

import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  {login}  from '../store/actions/authActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
interface LoginProps {
  login: (data: { username: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ login }) => {
  const navigate = useNavigate()
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

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();
    try {
      login(formData);
      navigate("/", {replace: true})
      
    } catch (error: any) {
      console.log(error)
      toast.error(error.message || "login failed")
      
    }
  };

  
    
    
      return (
        <div className=' d-flex justify-content-center align-items-center vh-100'>

          <Form onSubmit={handleSubmit} className='w-50 bg-black text-center p-4' style={{borderRadius: '6px', color: "White"}}>
            <Form.Group className="mb-3 p-3 " controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="string" placeholder="Enter Your username" name='username' onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3 p-3" controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
            </Form.Group>

            <Button className="m-3" variant="primary" type="submit">
              Submit
            </Button>
      </Form>
      <ToastContainer />
    </div>
      );
    
  }
    
    
  


export default connect(null, { login })(Login);
