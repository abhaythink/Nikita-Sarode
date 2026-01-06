import { Component } from "react";

class OldCounter extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            count2:0,
            
        };
        console.log('constructor ', this.props );

    }
    
    render(){

        return (
        <>
            <h1> { this.props.id }</h1>
            <h3>Count1: { this.state.count   } </h3>
            <h3>Count2 :{this.state.count2 }</h3>
            <button onClick={()=> this.setState({count:this.state.count+1, count2:this.state.count2-1  }) }>count1+ / -</button>

        </>

        )
    }
}

export default OldCounter;