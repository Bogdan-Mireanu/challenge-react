import React, {Component} from 'react';
import './filter.css';


export default class Filter extends Component{
    render(){
        return (
            <div className='filter-buttons flex items-center'>
                <button type='button' onClick={()=>this.props.filter('all')}>TOATE</button>
                <button type='button'onClick={()=>this.props.filter('muzica')}>MUZICA</button>
                <button type='button'onClick={()=>this.props.filter('video')}>VIDEO</button>
            </div>
        )
    }
}