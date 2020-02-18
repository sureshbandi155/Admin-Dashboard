import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// import classes from './App.module.css';
import SignUp from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Settings from './components/Settings/Settings';
import Timetracker from './components/Timetracker/Timetracker';
import Payments from './components/Payments/Payments';
import NDA from './components/NDA/NDA';
import Support from './components/Support/Support';
import Refer from './components/Refer and earn/Refer';



class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  render() {
    console.log(this.state.data);
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Redirect from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/time" component={Timetracker} />
        <Route path="/payments" component={Payments} />
        <Route path="/nda-contract" component={NDA} />
        <Route path="/support" component={Support} />
        <Route path="/refer" component={Refer} />
        <Route path="/settings" component={Settings} />
      </BrowserRouter>

    );
  }
}

export default App;
