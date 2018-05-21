import React, { Component } from "react";
import "./App.css";
import firebase from "./config/firebase";
import NewItemForm from './component/new-item-form'

const db = firebase.database();
class App extends Component {
  state = {
    view:[]
  }

  addDataTofirebase = () => {
    db
      .ref("hai")
      .set({
        name: "duong",
        age: 23,
      })
      .then(() => {
        console.log("cool");
      });
  };
  loadData = () => {
   
    db
      .ref("hai")
      .on("value", (data) => {
        var dataInstance = "";
        for (const key in data.val()) {
          if (data.val().hasOwnProperty(key)) {
            const property = data.val()[key];
            dataInstance += `key: ${key}: val: ${property}, <br>`;
          }
        }

        this.setState({
          view:dataInstance
        });
      });

   
    console.log(this.state.view);
  };

  updateData = () =>{}
  render() {
    return (
      <div className="App">
        <button onClick={this.addDataTofirebase}> add </button>
        <button onClick={this.loadData}> load </button>
        
        <NewItemForm data={this.state.view} submitForm={this.updateData}/>
      </div>
    );
  }
}

export default App;
