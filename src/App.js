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
        <div className="jumbotron">
          <h2 className="text-info">MarkDown Previewer</h2>
          <p>Built using ReactJS, Redux, React-Markdown, Bootstrap.</p>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <Editor data={this.props.data}/>
          <Previewer data={this.props.data}/>
        </div>
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
