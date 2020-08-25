import React , { Component } from 'react';
import Contact from './Contact'
import AddContact from './AddContact'
import './App.css';

class App extends Component {

  state = {
    contactPersons : [
      {name:'Kashif Ali',age:'23',email:'khosokashif@gmail.com',id:1},
      {name:'Rehan Ali',age:'25',email:'rehanali@gmail.com',id:2},
      {name:'Asif Ali',age:'24',email:'asifali@gmail.com',id:3},
      {name:'Ali',age:'15',email:'ali@gmail.com',id:4},
    ]
  };

  render(){
    return (
      <div className="App">
        <div>Welcome to my first react App</div>
        <div>This is Parent component</div>
        <AddContact/>
        <Contact contactPersons={this.state.contactPersons}></Contact>
      </div>
    );
  }
}
export default App;
