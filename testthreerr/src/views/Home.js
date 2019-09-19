/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 20:35:23
 * @LastEditTime: 2019-08-21 10:47:31
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Buy from './home/Buy'
import Eat from './home/Eat'
class Header extends Component{
    render(){
        return <header>曼谷</header>
    }
}

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Header/>
                <p className='bar'>
                    <NavLink to='/home/buy'>当地必买</NavLink>
                    <NavLink to='/home/eat'>当地必吃</NavLink>
                </p>
                <div className='main'>
                    <Switch>
                        <Route path='/home/buy' component={Buy}/>
                        <Route path='/home/eat' component={Eat}/>
                        <Redirect to='/home/buy'/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;
