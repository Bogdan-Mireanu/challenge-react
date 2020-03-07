import React from 'react';
import './App.css';
import SignIn from './components/signin/SignIn';
import MyPlaylist from './components/MyPlaylist/MyPlaylist';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlists:[]
    }
  }
  

  addPlaylist = (playlist)=>{
    const newPlaylists=[playlist,...this.state.playlists];
    this.setState({
      playlists: newPlaylists
    })
  }

  render(){
    return (
      <div className="App">
        <SignIn/>
        <MyPlaylist onSubmit={this.addPlaylist} playlist={this.state.playlists}/>
        <div className="playlist-container">
            {this.state.playlists.map(item => (
            <div key={item.id} className={item.class}>{item.text}</div>
            ))}
        </div>
      </div>
    );
  }
  
}

export default App;
