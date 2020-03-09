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
      users: [],
      hasError:false,
      curentUser:{}
    }
  };

  handleChange = (e) =>{
    const input = e.target;
    const value = input.name=== 'uname' ? input.value : input.value;

    this.setState({[input.name]:value})
  }

  handleFormSubmit = (userCredentials) => {
    this.setState({hasError: false});
    const user = {...userCredentials, playlists: []}

    if(!this.state.users.length) {
      this.addNewUser(user);
      return;
    }

    const userExists = this.state.users.filter(user => user.username === userCredentials.username);

    if(userExists.length) {
      this.checkCredentials(user, userExists);
      return;
    } else {
      this.addNewUser(user);
      return;
    }

  }
  checkCredentials = (user, userExists) => {
    if(user.password === userExists[0].password) {
      this.setState({
        route: 'enterPlaylists',
        currentUser: {...userExists[0]},
        playlists: [...userExists[0].playlists]
      })
    } else {
      this.setState({hasError: true});
    }
  }

  addNewUser = (user) => {
    this.setState((state) => {
      const users = state.users;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return { users }
    });
    this.setState({
      route: 'enterPlaylists',
      currentUser: {...user}
    })
  }

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

  get usersFromLocalStorage() {
    return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  }

  addPlaylist = (playlist)=>{
    const newPlaylists=[playlist,...this.state.playlists];
    this.setState({
      playlists: newPlaylists
    });
  }
  componentDidMount() {
    this.setState({
      users: this.usersFromLocalStorage
    });
  }
  render(){
    return (
      <div className="App">
      {this.state.route === 'logare' ? <SignIn 
      onRouteChange={this.onRouteChange} 
      onChange={this.handleChange}
      onFormSubmit={this.handleFormSubmit}
      hasError={this.state.hasError}
      /> :
        <div>
        <MyPlaylist onSubmit={this.addPlaylist} playlists={this.state.playlists} remove={this.remove}/>
        </div>} 
        </div>
      );
    }
}

export default App;
