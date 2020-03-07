import React, {Component} from 'react';
import './myplaylist.css'
import shortid from 'shortid';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';


export default class MyPlaylist extends Component{
    constructor(props){
        super(props)
            this.state = {
                text: "",
                value:"",
                class:"",
            }
    }
  
    handleOptionValue = (e)=> {
        this.setState({class:e.target.value});

    }
    handleChange = (e) => {
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    handleSubmit = (e) =>{
       e.preventDefault();
       this.props.onSubmit({
           id:shortid.generate(),
           text:this.state.text,
           class: this.state.class
       })
       this.setState({
           text:""
       })
    }

    filterPlaylist = ()=>{
       let currentPlaylist = [];
       if(this.state.class === ""){
           currentPlaylist = this.props.playlists;
       }
       else if(this.state.class === "muzica"){
           currentPlaylist = this.props.playlists.filter(item =>item.class==="muzica")
       }
       else if(this.state.class === "video"){
           currentPlaylist = this.props.playlists.filter(item =>item.class==="video")
       }
    }

    render(){
        return (
            <>
            <Header/>
            <form className='enter-field' onSubmit={this.handleSubmit}>
                <input 
                name='text'
                className='input-text' 
                type="text" 
                placeholder='  Enter something ...'
                value={this.state.text}
                onChange={this.handleChange}
                />
                <select className='options' value={this.state.value} onChange={this.handleOptionValue}>
                    <option value="" defaultValue></option>
                    <option value="muzica">MUZICA</option>
                    <option value="video">VIDEO</option>
                </select>
                <input className='add' type="submit" value="ADAUGA"/> 
            </form>
            <Filter filter={this.filterPlaylist}/>
            </>
        )
    }
};