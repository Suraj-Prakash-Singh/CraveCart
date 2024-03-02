import {Component} from "react";
import RiderInfo from "./RiderInfo";

class ContactClass extends Component{
    constructor(props){
        console.log("parent constructor called")
        super(props);
        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        console.log("Parent component didMount called")
    }

    render(){
        console.log("Parent render called")
        return(<>
                <h1>Name is</h1>
                <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }
                }>Click</button>
                <h2>Count :{this.state.count} </h2>
                <RiderInfo id="first"/>
                <RiderInfo id="second"/>
            </>
        )
    }
}

export default ContactClass;