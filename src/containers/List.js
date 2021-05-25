import React, { Component } from 'react'

export default class List extends Component {
    state = {
        players: [],
        likes: "",
        incriment: "",
        newLikes: ""
    }

    componentDidMount() {
        fetch("http://localhost:3002/newlist")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                players: data
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleClick = (e) => {
        //update likes by increment on button press
        this.setState({
            [e.target.name]: parseInt(this.state.newLikes + this.state.incriment)
        })
    }

    render() {
        const players = this.state.players.map( s => 
            <li className="list">
                {s.name}
                <ul>Team: {s.team}</ul>
                <ul>Position: {s.position}</ul>
                <ul>Overall Rank: {s.rank}</ul>
                <ul>ESPN Rating: {s.ESPNRating}</ul>
                <button name = "newLikes" value = {this.state.newLikes} id={s.id} onClick={this.handleClick}>
                    Like {this.state.newLikes}
                </button>
            </li>)
        
        return (
            <div>
                <form>
                    <input type="number" name="incriment" defaultValue={0} onChange={this.handleChange}/>
                </form>
                {players}
            </div>
        )
    }
}

// Add a Like button to list
// <input type "text"> that will determine incremint of likes
// +=
// counter for likes 