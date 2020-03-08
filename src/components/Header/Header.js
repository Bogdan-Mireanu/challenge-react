import React, {Component} from 'react';
import './header.css';


export default class Header extends Component{
    render(){
        return (
            <div className='header'>
                <h1>Hello, name</h1>
                <nav className ='logout'>
                    <b><a href="">LOGOUT</a></b>
                </nav>
            </div>
        )
    }
}      

