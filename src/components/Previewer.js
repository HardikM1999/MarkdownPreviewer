import React,{ Component } from "react";
import "./Previewer.css";
import ReactMarkdown from "react-markdown";

class Previewer extends Component{
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    render()
    {
        return(
            <div className="previewer-div">
                <h3>Previewer</h3>
                <div id="previewer">
                    <ReactMarkdown source={this.props.data}/>
                </div>
            </div>
        );
    }
}

export default Previewer;