/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:37:13
 * @LastEditTime: 2019-08-14 15:39:11
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom'
import RouteView from '../router/routerView'
class Movie extends Component {
    render() {
        let {route}=this.props
        return (
            <div className='movie'>
                <p>
                    <NavLink to='/home/movie/hot'>正在热映 </NavLink>
                    <NavLink to='/home/movie/ing'>即将上映 </NavLink>
                    <span className="iconfont icon-sousuo" onClick={()=>{
                        this.props.history.push('/search')
                    }}></span>
                </p>
                {/* <Switch>
                    <Route path='/home/movie/hot' component={Hot}/>
                    <Route path='/home/movie/ing' component={Ing}/>
                    <Redirect from='/home/movie' to='/home/movie/hot'></Redirect>
                </Switch> */}
                <RouteView route={route}/>
            </div>
        );
    }
}

export default Movie;