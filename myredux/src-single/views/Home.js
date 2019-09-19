/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 08:31:06
 * @LastEditTime: 2019-08-15 09:35:36
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import './home.css'
import Bar from '../components/Bar'
import Selected from '../components/Selected'
class Home extends Component {
    state = {
        barList: [
            {
                name: '螺旋焊钢',
                flag: false
            },
            {
                name: '工业线材',
                flag: false
            },
            {
                name: '直槽钢',
                flag: false
            }
        ],
        selectedList:[]
    }
    selectBar=(index)=>{
    //    console.log(index) 
        let {barList}=this.state
        if(!barList[index].flag){
            barList[index].flag=true
        }
        this.setState({barList})
        this.getSectedList()
    }
    getSectedList=()=>{
        //filter全部falg为true的项
        let {barList}=this.state
       let selectedList= barList.filter((item)=>item.flag)
       this.setState({selectedList})
    }
    render() {
        let {barList,selectedList}=this.state
        return (
            <div className='home'>
                <Bar list={barList} selectBar={this.selectBar}/>
                <h4>以下是选择的类型</h4>
                <Selected list={selectedList}/>
            </div>
        );
    }
}

export default Home;