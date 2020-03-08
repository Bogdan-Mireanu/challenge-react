import React, { Component } from 'react';
import './myplaylist.css';
import shortid from 'shortid';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';

export default class MyPlaylist extends Component {
  options = ['', 'muzica', 'video'];

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      value: '',
      type: '',
      filter: 'all',
      hasError: false,
    };
  }

  handleSelect = e => {
    this.setState({ hasError: false });
    this.setState({ type: e.target.value });
  };

  handleInput = e => {
    this.setState({ hasError: false });
    this.setState({
      value: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.inputIsValid) {
      this.setState({ hasError: true });
      return;
    }
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      class: this.state.type,
    });
    this.setState({
      text: '',
    });
  };

  filterPlaylist = s => {
    this.setState({
      filter: s,
    });
  };

  get inputIsValid() {
    return !!this.state.type && !!this.state.value.trim() ? false : true;
  }

  render() {
    let showPlaylists = [];
    if (this.state.filter === 'all') {
      showPlaylists = this.props.playlists;
    } else if (this.state.filter === 'muzica') {
      showPlaylists = this.props.playlists.filter(
        item => item.class === 'muzica'
      );
    } else if (this.state.filter === 'video') {
      showPlaylists = this.props.playlists.filter(
        item => item.class === 'video'
      );
    }

    return (
      <div className="container">
        <Header />
        <form
          className="enter-field flex justify-center"
          onSubmit={this.handleSubmit}
        >
          <input
            name="text"
            className="input-text w-2/3"
            type="text"
            placeholder="Enter something..."
            defaultValue={this.state.value}
            onInput={this.handleInput}
            value={this.state.text}
          />
          <div className="w-1/3 flex justify-center">
            <select
              className="options w-1/2"
              value={this.state.type}
              onChange={this.handleSelect}
            >
              {this.options.map(option => (
                <option key={option} value={option}>
                  {option.toUpperCase()}
                </option>
              ))}
            </select>
            <button
              className="add w-1/2"
              type="submit"
              disabled={this.inputIsValid}
            >
              Adaugă
            </button>
          </div>
        </form>
        {this.props.playlists.length > 0 ? (
          <Filter filter={this.filterPlaylist} />
        ) : null}
        <div className="playlist-container">
          {showPlaylists.map(item => (
            <div itemKey={item.id} className={item.class}>
              {item.text}
              <button className='remove'type='button' onClick={()=>this.props.remove(item.id)}><b>  X</b></button>
            </div>
          ))}
        </div>
      </div>
    );
  }
};