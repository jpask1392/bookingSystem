import React, {Component} from 'react';
import Home from './home/index.jsx';
import './masterStyling.scss'

// routes need to be imported

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ''
    }
  }
  
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users: users}))
  }

  render() {
    return (
      <div id="page-wrapper">
        <Home />
      </div>
    );
  }
}

export default App;
