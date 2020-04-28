import React,{Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {dataChangeAction} from "./actions/dataChangeAction";
import {dataAction} from "./actions/changeData";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    //console.log(this.props.data);
    return (
      <div className="App">
        <h1>MarkDown Previewer</h1>
        <Editor data={this.props.data}/>
        <Previewer data={this.props.data}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  ...state
});

const mapDispatchToProps = dispatch =>({
  dataChangeAction: () => dispatch(dataChangeAction),
  dataAction: (payload) => dispatch(dataAction(payload))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
