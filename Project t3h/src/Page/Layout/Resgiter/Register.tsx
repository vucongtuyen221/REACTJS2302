import { CascaderProps, notification } from 'antd';
import styles from './styleRg.module.scss'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiRes } from '../../../Apis/ApiRegster/ApiRegister';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);
const { Option } = Select;

// interface DataType {
//   value?: string;
//   label?: string;
//   children?: DataType[];
// }



const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const Register: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
   ApiRes(values).then((res) => {
    notification.success({
      message: 'Đăng ký',
      description: 'Đăng ký thành công!'
    })
    navigate('/login')
   }).catch((err) => {
    notification.info({
      message: 'Đăng ký',
      description: 'Đăng ký thất bại'
    })
   });
  };

  const onFinishFailed = (values: any) => {

  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="03">+03</Option>
      </Select>
    </Form.Item>
  );

 
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  // const websiteOptions = autoCompleteResult.map((website) => ({
  //   label: website,
  //   value: website,
  // }));

  return (
    <div className={cx('containerR')}>
    <Form
     {...formItemLayout}
     form={form}
     name="register"
     onFinish={onFinish}
   
     style={{ maxWidth: 600 }}
     scrollToFirstError
   >
     <Form.Item
       name="email"
       label="E-mail"
       rules={[
         {
           type: 'email',
           message: 'E-mail không hợp lệ!',
         },
         {
           required: true,
           message: 'Vui lòng nhập E-mail của bạn',
         },
       ]}
     >
       <Input />
     </Form.Item>
   
    

      <Form.Item
        name="mật khẩu"
        label="Mật khẩu"
       
        rules={[
          {
            required: true,
            message: 'Mật khẩu của bạn ít nhất 6 - 60 ký tự',
          },


        ]}
        hasFeedback
      
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="xác nhận pw"
        label="Xác nhận mật khẩu"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Xác nhận mật khẩu của bạn!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (value || getFieldValue ('password') === value) {
                console.log (value)
                return Promise.resolve();
                
              }
              return Promise.reject()
              // return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      

      

      <Form.Item
        name="phone"
        label="Số điện thoại"
        rules={[{ required: true, message: 'Xin vui lòng nhập số điện thoại!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      

      {/*  */}


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Tôi đã đọc và  <a href="">thỏa thuận</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button className={cx('button')} type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
      <Form.Item>
        <div className={cx('right')}>
        Bạn đã có tài khoản? 
        <span><Link to= {'/login'}> Đăng nhập</Link></span>
        </div>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Register;

