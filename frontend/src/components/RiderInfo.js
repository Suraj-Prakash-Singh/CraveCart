import { Component } from "react";

class RiderInfo extends Component{
    constructor(props){
        super(props)
        console.log(this.props.id + " Child consturctor called");
    }

    componentDidMount(){
        console.log(this.props.id + " Child component did mount called");
    }
    render(){
        console.log(this.props.id + " Child component render called");
        return <p>This is a child component</p>
    }
}

export default RiderInfo;