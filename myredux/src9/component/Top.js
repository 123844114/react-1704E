/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:07:20
 * @LastEditTime: 2019-08-23 16:34:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
class Top extends Component {
    state={current:'mail'}
    render() {
        return (
            <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />任务
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />分享
        </Menu.Item>
        <Menu.Item key="alipay">
        <Icon type="appstore" />文件
        </Menu.Item>
      </Menu>
        );
    }
}

export default Top;