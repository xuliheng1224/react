import React, { Component } from "react";
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <div className="login-form-forgot" >Forgot password</div>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="http://www.baidu.com">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

// 存入state
const mapStateToProps = (state) => {
  console.log(state);

  // return {
  //   PayDecrease: () => dispatch({ type: "login" })
  // }
}
// 存入state
const mapDispatchToProps = (dispatch) => {
  return {
    PayDecrease: () => dispatch({ type: "login" })
  }
}

export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)