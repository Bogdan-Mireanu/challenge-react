import React, {Component} from 'react';
import './signin.css';


export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleSubmit = () => {
        if(this.isValidUsername && this.isValidPassword) {
            this.props.onFormSubmit(this.state);
            return;
        }
        return;
    }
    handleUsername = (event) => {
        if(!!event.target.value.trim()) {
            this.setState({
                username: event.target.value.trim()
            });
            return;
        }
        // TODO: validate in case user doesn't enter an username
        return;
    }

    handlePassword = (event) => {
        if(!!event.target.value.trim()) {
            this.setState({
                password: event.target.value.trim()
            })
            return;
        }
        // TODO: validate in case user doesn't enter a password
        return;
    }
    get isValidUsername(){
        return !!this.state.username.trim();
    }
    get isValidPassword(){
        return !!this.state.password.trim();
    }
    wrapperFunction = () => {
        this.props.onRouteChange();
        this.handleSubmit()
    }
    render(){
        return (
            <form className='login'>
                <label>Username:</label>
                <input type="text" id="fname" name="uname" defaultValue={this.state.username} onChange={this.props.handleUsername}/>
                <label>Parola:</label>
                <input type="password" id="lname" name="pass" defaultValue={this.state.password} onChange={this.props.handlePassword}/>
                {this.props.hasError && <p>Parola introdusă nu este corectă</p>}
                <input className='logare' type="submit" value="LOGARE" onClick={this.wrapperFunction}/>  
            </form>
        )
    }
};