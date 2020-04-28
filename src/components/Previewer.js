import React,{ Component } from "react";
import "./Previewer.css";
import marked from "react-marked";

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

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
        <div id="previewer" >{marked("hello")}</div>
            </div>
        );
    }
}

export default Previewer;