/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:30:29
 * @LastEditTime: 2019-08-14 15:29:23
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import '../style/style.scss'
import Router from '../router'
class index extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='catmovie'>
               <Header />  
                <>
                <Router/>
                    {/* { <BrowserRouter>
                        
                        <Switch>
                           
                            <Route path='/home' render={()=>{
                                return <Home route={this.state.route} />
                            }}></Route>

                            <Route path='/detail/:id' component={Detail}></Route>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/search' component={Search}></Route>
                            <Redirect  to='/home/movie/hot' />
                        </Switch>
                        </BrowserRouter> } */}
                </>
            </div>
        );
    }
}

export default index;