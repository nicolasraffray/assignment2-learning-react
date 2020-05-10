import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComp/ValidationComponent'
import CharComponent from './components/CharComponent/CharComponent'
import './App.css';

class App extends Component {
  state = {
    text: ""
  }

  handleChange = (event) => {
    let text = {...this.state.text}
    text.text = event.target.value
    this.setState({
      text: text.text
    })
  }

  handleDelete = (index) => {
    console.log("index", index)
    let newText = [...this.state.text]
    newText.splice(index, 1)
    newText = newText.join("")
    this.setState({
      text: newText
    })
  }



  render() {
    return (
      <div className="App">
        <ol>
          <li>DONE! : Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>DONE! : Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>DONE! : Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>DONE! : Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.handleChange}></input>
        <p>{this.state.text}</p>
        <ValidationComponent tLength={this.state.text.length}/>
        {this.state.text.split('').map((e,index) => {
          return (
            <CharComponent 
              key={index} 
              letter={e}
              onClick={() => this.handleDelete(index)}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
