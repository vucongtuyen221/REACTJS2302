import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Space, message, notification } from 'antd';
import './stylelogin/style.scss'
import {GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom';
import { Apilogin } from '../Apis/Apilogin/Apilogin';







const Login: React.FC = () => {
 
  const navigate = useNavigate()
  const onFinish = (value: any) => {
  Apilogin(value).then(() => {
    notification.success({
      message: 'Đăng nhập',
      description: 'Đăng nhập thành công'
    })
    navigate('/')
  }).catch((error) => {
    notification.info({
      message: error,
      description: 'Error while navigating'
    })
  });
}
  const onFFailed = ((err: any) => {
    console.log('Failed', err);
  })

  return (
    <Space direction='horizontal' className='container'>
        
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Mật khẩu phải có ít nhất 6 - 60 ký tự!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>
      <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Nhớ tài khoản</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
            Quên mật khẩu
        </a>
        
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Đăng nhập
        </Button>
        <br />
        <br />
        Bạn chưa có tài khoản? <Link to={'/Register'}>Đăng ký ngay</Link>

      </Form.Item>
      <Form.Item>
        
        Hoặc đăng nhập với: 
            <span><a className='icon' href="http://facebook.com"> <FacebookOutlined /></a></span>
            <span><a className='icon' href="https://accounts.google.com"> <GoogleOutlined /></a></span>
        
        
       <hr />
      </Form.Item>
    </Form>
    </Space>

  );
};

export default Login;