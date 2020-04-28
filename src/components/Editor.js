import React,{ Component } from "react";
import {dataAction} from "../actions/changeData";
import store from "../store";
import './Editor.css';
//import {Store} from "react-redux";

class Editor extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     data: "",
        // }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        //console.log(this.props.data);
        store.dispatch(dataAction(event.target.value));
        // this.setState({
        //     data: Store.getState().data
        // });
    }
    render()
    {
        return(
            <div className="editor-div">
                <h4>Editor</h4>
                <textarea id="editor" rows="10" cols="70" type="text" value={this.props.data} onChange={(event) => this.handleChange(event)}></textarea>
            </div>
        );
    }
}

export default Editor;