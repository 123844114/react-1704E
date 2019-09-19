/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 10:05:45
 * @LastEditTime: 2019-08-22 15:14:35
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink,BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import ZhiShi from './views/ZhiShi';
import SheQu from './views/SheQu';
import My from './views/My';
import Login from './views/Login';
import Header from './component/Header'
import Footer from './component/Footer'
import Publish from './views/Publish';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
          <Switch>
            <Route path='/zhishi' component={ZhiShi}/>
            <Route path='/shequ' component={SheQu}/>
            <Route path='/my' component={My}/>
            <Route path='/login' component={Login}/>
            <Route  path='/publish' component={Publish}/>
            <Redirect to='/zhishi'/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;