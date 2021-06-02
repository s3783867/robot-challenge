import React, { Component } from 'react'
import axios from 'axios'

class PostInstruction extends Component {
    constructor(){
        super()

        this.state={
            instruction: '',
            instructionpt2: ''
        }
    }
    
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:4001/instruction', this.state)
        .then(response =>{
            console.log(response)
            document.getElementById("response").innerHTML = response.data.unique + " unique locations photographed";
        })
        .catch(error =>{
            console.log(error)
        })
    }
    onSubmitPart2 = e => {
        e.preventDefault()
        axios.post('http://localhost:4001/pt2instruction', this.state)
        .then(response =>{
            console.log(response)
            document.getElementById("response2").innerHTML = response.data.unique + " unique locations photographed";
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        const { instruction, instructionpt2 } = this.state
        return(
            <section>
                <h1>Robot Challenge</h1>
            <div>
                <form onSubmit={this.onSubmit}>
                    <h3>Send Instructions to 1 robot:</h3>
                    <input type="text" name="instruction" value={instruction} onChange={this.onChange} pattern="[wasdx]+"></input>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div id="response"></div>
            <br></br>
            <div>
                <form onSubmit={this.onSubmitPart2}>
                    <h3>Send Instructions to 2 robots:</h3>
                    <input type="text" name="instructionpt2" value={instructionpt2} onChange={this.onChange} pattern="[wasdx]+"></input>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div id="response2">
            </div>
            </section>
        )
    }
}
export default PostInstruction