import React, { Component } from 'react';
import './App.css'
import 'react-table/react-table.css'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import Navside from './Navside'
import StateCar from './StateCar'
import NotFound from './NotFound'
import HireCar from './HireCar'
import EditForm from './EditForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends Component {

  state = {
  }

  render() {


    return (
      <div className="container-fluid" >
        <Router>
          <Navside />
          <Switch>
            <Route path="/" exact component={StateCar} />
            <Route path="/wydane" exact component={HireCar} />
            <Route path="/generuj" exact component={() => <div>xD</div>} />
            <Route path="/car/:id" exact component={EditForm} />
            <Route component={NotFound} />
          </Switch>
        </Router>


      </div >
    )
  }
}

export default App