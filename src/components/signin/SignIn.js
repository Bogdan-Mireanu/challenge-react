import React, {Component} from 'react';
import './signin.css';


export default class SignIn extends Component{
    render(){
        return (
            <div className='login' handleFormSubmit={this.props.handleFormSubmit} >
                <label>Username:</label>
                <input type="text" id="fname" name="uname" value={this.props.userData.user} onChange={this.props.onChange}/>
                <label>Parola:</label>
                <input type="text" id="lname" name="pass" value={this.props.userData.password}/>
                <input className='logare' type="submit" value="LOGARE" onClick={this.props.onRouteChange}/>  
            </div>
            
        )
    }
};