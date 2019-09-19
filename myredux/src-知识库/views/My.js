/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:20:53
 * @LastEditTime: 2019-08-23 15:29:54
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class My extends Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <Form inline={true} onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户："
                validateStatus="success"
                help="请输入数字和字母组合"
                 required>
                    <Input placeholder="请输入账户名"
                        {...getFieldProps('userName')} />
                </FormItem>
                <FormItem
                    label="密码：">
                    <Input type="password" placeholder="请输入密码"
                        {...getFieldProps('password')} />
                </FormItem>
                <FormItem>
                    <label className="ant-checkbox-inline">
                        <Checkbox
                            {...getFieldProps('agreement')} />记住我
              </label>
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    }
}

export default Form.create()(My);