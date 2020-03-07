import React, {Component} from 'react';
import './signin.css';


export default class SignIn extends Component{
    render(){
        return (
            <div className='login'>
                <label>Username:</label>
                <input type="text" id="fname" name="fname"/>
                <label>Parola:</label>
                <input type="text" id="lname" name="lname"/>
                <input className='logare' type="submit" value="LOGARE"/>  
            </div>
            
        )
    }
};