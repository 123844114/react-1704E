/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-08-22 15:13:44
 * @LastEditTime: 2019-08-23 10:25:14
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import axios from 'axios'
class Publish extends Component {
    state={title:'',info:'',type:'type1'}
    render() {
        let {title,info,type}=this.state
        return (
            <div>
                <h1>发帖</h1>
                <form method='post'>
                    <input type='text' placeholder='标题' value={title} onChange={
                        (e)=>{
                            this.setState({title:e.target.value})
                        }
                    }/>
                    <input type='text' placeholder='正文' value={info} onChange={
                        (e)=>{
                            this.setState({info:e.target.value})
                        }
                    }/>
                    <select value={type} onChange={(e)=>{
                        this.setState({type:e.target.value})
                    }}>
                        <option value='type0'>北京妈妈群</option>
                        <option value='type1'>宝爸天团</option>
                    </select>
                    <button type='submit' onClick={this.submitFn}>发帖</button>
                </form>
            </div>
        );
    }
    submitFn=(e)=>{ //提交
       e.preventDefault();
       console.log({...this.state})
        axios.post('/add',{...this.state}).then(({data})=>{
            // alert(data)
            if(data.code==0){
                this.props.history.push('/shequ/shequ')
            }
        })
    }
}

export default Publish;