// import React from 'react'
// import { Link } from 'react-router-dom'
import { login } from '../../apis/auth'
import './style.css'

import { Button, Card, Input, Form, Checkbox, Space, notification, Descriptions } from 'antd'
// import { createBrowserRouter } from 'react-router-dom'


function LoginPage() {
  const onFinish = (values: any) =>{
    console.log('onFinish', values)
    login(values).then((data) => {
          notification.success({
          message: 'Đăng nhập',
          description: 'Đăng nhập thành công'
        });
       }).catch((err) => {
        let description = ''
        if (err.response.data && err.response.data.message) {
          description = 'Tên tài khoản hoặc mật khẩu không chính xác';
        }
        notification.error({
        message: 'Thất bại',
       description,
        })
       })

      }
  const onFinishFailed = (errorInfo: any) =>{
    console.log('onFinishFailed', errorInfo)
  }
  return (
    <Space direction='horizontal' className='login-container'>
    <Card
      title='Login'
      extra={<a href='#'>Register</a>}
      style={{ width: 500 }}
    >
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </Space>
   


  )
}

export default LoginPage