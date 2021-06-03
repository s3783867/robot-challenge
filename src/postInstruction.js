import React, { Component } from 'react'
import axios from 'axios'
import './post.css'
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
            document.getElementById("response").style.color = "cornflowerblue";
        })
        .catch(error =>{
            console.log(error)
            document.getElementById("response").innerHTML = "Instructions Invalid";
            document.getElementById("response").style.color = "red";
        })
    }
    onSubmitPart2 = e => {
        e.preventDefault()
        axios.post('http://localhost:4001/pt2instruction', this.state)
        .then(response =>{
            console.log(response)
            document.getElementById("response2").innerHTML = response.data.unique + " unique locations photographed";
            document.getElementById("response2").style.color = "cornflowerblue";
        })
        .catch(error =>{
            console.log(error)
            document.getElementById("response2").innerHTML = "Instructions Invalid";
            document.getElementById("response2").style.color = "red";
        })
    }
    render(){
        const { instruction, instructionpt2 } = this.state
        return(
            <section>
                <h1>Robot Challenge</h1>
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2>Send Instructions to 1 robot:</h2>
                    <textarea type="text" rows="10" cols="50" name="instruction" placeholder="Instructions: xwasd" value={instruction} onChange={this.onChange}></textarea>
                    <br></br>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div id="response"></div>
            <br></br>
            <div>
                <form onSubmit={this.onSubmitPart2}>
                    <h2>Send Instructions to 2 robots:</h2>
                    <textarea type="text" rows="10" cols="50" name="instructionpt2" placeholder="Instructions: xwasd" value={instructionpt2} onChange={this.onChange}></textarea>
                    <br></br>
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