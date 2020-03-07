import React, {Component} from 'react';
import './filter.css';


export default class Filter extends Component{
    render(){
        return (
            <div className='filter-buttons'>
                <button type='button'onClick={this.props.filterPlaylist}>TOATE</button>
                <button type='button'onClick={this.props.filterPlaylist}>MUZICA</button>
                <button type='button'onClick={this.props.filterPlaylist}>VIDEO</button>
            </div>
        )
    }
}   