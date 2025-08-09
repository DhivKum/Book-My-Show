
import React from 'react'
import { Form, Input, Button, Divider } from 'antd'
import { MailOutlined, LockOutlined, GoogleOutlined, FacebookOutlined, UserOutlined } from '@ant-design/icons'

function Login() {
  return (
    <div className="login-container enhanced-login">
      <div className="login-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="User Login" height="60" />
      </div>
      <h2 className="login-title">Sign In to Your Account</h2>
      <Form className="login-form">
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