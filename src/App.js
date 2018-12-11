import React, { Component } from "react";
import axios from 'axios'
import "./App.css";
import NavBar from "./Components/NavBar";
import Meals from "./Components/Meals";
import Filters from "./Components/Filters";

class App extends Component {


  state = {
    meals : []
  }

  componentDidMount(){
    axios.get('data.json')
    .then(response => 
      this.setState({
        meals: response.data.meals
      })
      )
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <NavBar />
        </div>

        <section className="section filters">
          <div className="container">
            <Filters />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Meals meals={this.state.meals} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
