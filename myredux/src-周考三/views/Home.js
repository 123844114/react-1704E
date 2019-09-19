/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 20:35:23
 * @LastEditTime: 2019-08-21 16:44:45
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Buy from './home/Buy'
import Eat from './home/Eat'
import cityData from '../data/city.json'
class Header extends Component {

    render() {
        return <header>
            <span onClick={this.toCity}>{cityData.selectCity} </span>
            <button onClick={this.toYouHui}>优惠券</button>
            <button onClick={this.toStore}>收藏</button>
        </header>
    }
    toYouHui = () => { //优惠券
        this.props.history.push('/youhui')
    }
    toStore = () => {
        this.props.history.push('/store')
    }
    toCity = () => {
        this.props.history.push('/city')
    }
}
let NewHeader = withRouter(Header)
class Home extends Component {
    render() {
        return (
            <div className='home'>
                <NewHeader />
                <p className='bar'>
                    <NavLink to='/home/buy'>当地必买</NavLink>
                    <NavLink to='/home/eat'>当地必吃</NavLink>
                </p>
                <div className='main'>
                    <Switch>
                        <Route path='/home/buy' component={Buy} />
                        <Route path='/home/eat' component={Eat} />
                        <Redirect to='/home/buy' />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;
