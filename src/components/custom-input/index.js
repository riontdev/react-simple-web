import { Component } from "react";
import Options from "./option";


const style = {
    height: 40,
    with: 400,
    borderRadius: 10,
    border: '4px solid rgba(0, 0, 0, 0.9)', 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    };

export default class CustomInput  extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        
        return (
            <div style={style}>
                <label>{this.props.name}</label>
                <select name={this.props.name} onChange={this.props.onChange}>
                    <Options data={this.props.data}></Options>
                </select>
            </div>
        );
    }
}