import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Typography, Input, Icon } from 'antd'
import './index.css'

const { Title, Text } = Typography;

function Login(): JSX.Element {
  return (
    <div className='login-wrapper'>
      <div className='head-wrapper'>
        <div className='logo-emoji'>👴</div>
        <Title level={2}>PickMe</Title>
        <Text style={{letterSpacing: 1, marginBottom: 32}}>To find that guy</Text>
      </div>
      <div className='input-area'>
        <Row>
          <Col span={18} offset={3}>
            <Input
              className='login-input'
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入学号"
            />
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={3}>
            <Input
              className='login-input'
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="云家园的密码"
            />
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={3}>
            <Button block style={{height: 40}} type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Col>
        </Row>
      </div>
      
      <div className='footer'>
        Made with ❤️ by wzb
      </div>
    </div>
  )
}

export default Login
