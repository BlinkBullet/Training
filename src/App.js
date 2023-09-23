import React, { Component } from 'react';
import Table from './components/table';

class App extends Component {

  state = {
    heading: ['Name', 'LastName', 'Age', 'Etc'],
    body: [
      {
        name: 'Ali',
        lastName: 'SirenHead',
        age: '24',
        etc: 'xyz'
      },
      {
        name: 'Bob',
        lastName: 'Builder',
        age: '22',
        etc: 'xyz'
      },
      {
        name: 'Joe',
        lastName: 'Jumper',
        age: '27',
        etc: 'xyz'
      },
      {
        name: 'Jol',
        lastName: 'Johns',
        age: '21',
        etc: 'xyz'
      },
    ],

    name: '',
    lastName: '',
    age: '',
    persons: [],
  };

  addPerson = () => {
    const { name, lastName, age } = this.state;
    if (name.length == 0) {
      this.setState({ Name: true })
    }
    if (lastName.length == 0) {
      this.setState({ validLastName: true })
    }
    if (age.length == 0) {
      this.setState({ validAge: true })
    }
    if (name.length > 0 && lastName.length > 0 && age.length > 0) {

      let person = {};
      person.name = name
      person.lastName = lastName
      person.age = age
      person.etc = 'xyz'
      let body = this.state.body

      this.state.body.push(person)

      this.setState({ body }, () => {
        this.setState({ name: '', lastName: '', age: '' })
      })
    };
  };

  render() {


    const { name, lastName, age } = this.state;


    return (
      <div>
        <Table heading={this.state.heading} body={this.state.body} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        {this.state?.validName && (
          <p style={{ color: '#ee5050' }}>invalid</p>
        )}
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        {this.state?.validLastName && (
          <p style={{ color: '#ee5050' }}>invalid</p>
        )}
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        {this.state?.validAge && (
          <p style={{ color: '#ee5050' }}>invalid</p>
        )}
        <button className='btn btn-dark' onClick={this.addPerson}>Add Person</button>
      </div>
    );
  }
}


export default App;


// class NameList extends Component {

//   state = {
//     inputText: '',
//     heading: ['Name', 'LastName', 'Age', 'Etc'],
//     body: [
//       ['Ali', 'SirenHead', '24', 'xyz'],
//       ['Bob', 'Builder', '22', 'xyz'],
//       ['Joe', 'Jumper', '27', 'xyz'],
//       ['Jol', 'Johns', '21', 'xyz']
//     ]
//   }


//   handleChange = (event) => {
//     this.setState({ inputText: event.target.value });
//   }

//   handleAdd = () => {
//     const newItem = [this.state.inputText,];
//     this.setState((prevState) => ({
//       body: [...prevState.body, newItem],
//       inputText: ''
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <Table heading={this.state.heading} body={this.state.body} />
//         <input type="text" value={this.state.inputText} onChange={this.handleChange} />
//         <button className="btn btn-dark" onClick={this.handleAdd}>
//           Add
//         </button>
//       </div>
//     );
//   }
// }

// export default NameList;