import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';

// import classes from './App.module.css';
import SignUp from './components/Signup/Signup';
import Login from './components/Login/Login';


class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({data: res.express }))
      .catch( err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body  = await response.json();
    if ( response.status !== 200) {
        throw Error(body.message)
    }
    return body;
  };
  render() {
    console.log(this.state.data);
    return (
      <BrowserRouter>
      {/* <Header /> */}
      <Redirect from="/" to ="/login" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      </BrowserRouter>
      
    );
  }
}

export default App;
