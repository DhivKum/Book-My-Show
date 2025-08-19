
import React from 'react'
import { Form, Input, Button, Divider } from 'antd'
import { MailOutlined, LockOutlined, GoogleOutlined, FacebookOutlined, UserOutlined } from '@ant-design/icons'
import { LoginUser } from '../apiCalls/users'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response) {
        localStorage.setItem('token', response.token); // Store token in local storage
        
        console.log("Login successful:", response);
        navigate('/'); // Redirect to home page on successful login
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <div className="login-container enhanced-login">
      <div className="login-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="User Login" height="60" />
      </div>
      <h2 className="login-title">Sign In to Your Account</h2>
      <Form className="login-form" onFinish={handleLogin}>
        <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
        </Form.Item>
        <div className="login-links">
          <a href="#" className="forgot-link">Forgot password?</a>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn">
            Login
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

export default Login