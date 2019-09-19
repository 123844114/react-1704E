/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 08:51:45
 * @LastEditTime: 2019-08-19 21:40:51
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom"
import RouterView from "./RouterView"
import route from "./RouteList"
import Header from '../components/Header'
import Footer from '../components/Footer'
class index extends Component {
    render() {
        return (
            <>
                <Header/>
                <BrowserRouter>
                    <RouterView route={route}/>
                    <Footer/>
                </BrowserRouter>
            </>
        );
    }
}

export default index;