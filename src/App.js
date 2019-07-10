import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {users: ''}
  }
  

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users: users}))
  }

  render() {
    let users = ''
    if(this.state.users !== ''){
      users = this.state.users[0]
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {`Hi ${users.username}`}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
