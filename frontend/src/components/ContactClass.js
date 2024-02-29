import React from "react";

class ContactClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    render(){
        return(<>
                <h1>Name is</h1>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }
                }>Click</button>
                <h2>Count :{this.state.count} </h2>
            </>
        )
    }
}

export default ContactClass;