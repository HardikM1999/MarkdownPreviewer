import React,{Component} from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    );
  }
}

export default App;
