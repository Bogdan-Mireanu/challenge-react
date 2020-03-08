import React from 'react';
import './normalize.css';
import './App.css';
import SignIn from './components/signin/SignIn';
import MyPlaylist from './components/MyPlaylist/MyPlaylist';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlists:[],
      route: 'logare',
      users:[{
        user:'',
        password:'',
        entries:[]
      }]
    }
  };

  handleChange = (e) =>{
    const input = e.target;
    const value = input.name === 'uname'? input.value : input.value;

    this.setState({[input.name]:value})
  }

 /* handleFormSubmit = () => {
    const {user, password} = this.state.users;
    localStorage.setItem('user', user);
    localStorage.setItem('password', user? password:'')
  }*/

  remove = (id) => {
    const playlistUpdated =this.state.playlists.filter(item =>item.id !== id);
    this.setState({
      playlists : playlistUpdated
      
    });
    console.table(this.state.playlists)
  } 
  onRouteChange = () => {
    this.setState({
      route: 'enterPlaylists'
    })
  } 
  addPlaylist = (playlist)=>{
    const newPlaylists=[playlist,...this.state.playlists];
    this.setState({
      playlists: newPlaylists
    });
  }
  componentWillUpdate(){
    localStorage.setItem('users',JSON.stringify(this.state.users));
  }

  render(){
    return (
      <div className="App">

      {this.state.route === 'logare' ? <SignIn 
      onRouteChange={this.onRouteChange} 
      userData={this.state.users} 
      onChange={this.handleChange}
      handleFormSubmit={this.handleFormSubmit}
      /> : 
        <div>
        <MyPlaylist onSubmit={this.addPlaylist} playlists={this.state.playlists} remove={this.remove}/>
        </div>} 
        </div>
      );
    }
}

export default App;
