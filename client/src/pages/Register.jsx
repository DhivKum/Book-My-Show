
import React from 'react'
import { Form, Input, Button, Divider, message } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { RegisterUser } from '../apiCalls/users';
import '../App.css';

message.config({
  top: 60, // distance from top in pixels
  duration: 2, // seconds
  maxCount: 3,
});

function Register() {
  const registeredData = async (values) => {
    // console.log('Received values:', values);
    
    try
    {
      const response = await RegisterUser(values);
      if(response)
      {
        message.success("User registered successfully");
        console.log("Response data:", response);
        // Optionally redirect to login or home page
      }
      else
      {
        message.error("User already exists");
      }
      
    }
    catch(err)
    {
      message.error("Registration failed");
      console.error("Registration failed:", err);
    }
  }
  return (
    <div className="login-container enhanced-login">
      <div className="login-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="User Login" height="60" />
      </div>
      <h2 className="login-title">Register to your Account</h2>
      <Form className="login-form" onFinish={registeredData}>
        <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" size="large" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
        </Form.Item>
        <div className="login-links" style={{visibility: 'hidden'}}>
          <a href="#" className="forgot-link">Forgot password?</a>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn">
            Register
            
          </Button>
        </Form.Item>
        <Divider plain className="login-divider">or continue with</Divider>
        <div className="social-login-btns">
          <Button shape="circle" icon={<GoogleOutlined />} className="social-btn google" size="large" />
          <Button shape="circle" icon={<FacebookOutlined />} className="social-btn facebook" size="large" />
        </div>
      </Form>
    </div>
  )
}

export default Register