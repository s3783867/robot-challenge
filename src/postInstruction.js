import React, { Component } from 'react'
import axios from 'axios'

class PostInstruction extends Component {
    constructor(props){
        super(props)

        this.state={
            instruction: ''
        }
    }
    
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:4001/instruction', this.state)
        .then(response =>{
            console.log(response)
            document.getElementById("response").innerHTML = response.data.unique + " unique locations photographed";
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        const { instruction } = this.state
        return(
            <body>
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="instruction" value={instruction} onChange={this.onChange}></input>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div id="response">
            </div>
            </body>
        )
    }
}
export default PostInstruction