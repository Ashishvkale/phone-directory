import React, {Component} from "react";
import Header from "./Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="component-container">
        <Header heading="PHONE DIRECTOERY"/>
          <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>
            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span>
              <span className="grid-item phone-heading">Phone</span>              
            </div>
            {
              subscribers.map(sub=> {
                return <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
                  </div>
              })
            }
          </div>
      </div>
    );
 }
}
export default App;