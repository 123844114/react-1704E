/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 16:35:36
 * @LastEditTime: 2019-08-21 16:44:57
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import cityData from '../data/city.json'
class City extends Component {
    state = { cityList: cityData.cityList }
    render() {
        return (
            <div>
                {
                    this.state.cityList.map((item, index) => <span key={index} onClick={this.changeCity.bind(null, index)}>{item}</span>)
                }
            </div>
        );
    }
    changeCity = (index) => {
        cityData.selectCity = this.state.cityList[index]
        this.props.history.goBack()
    }
}

export default City;