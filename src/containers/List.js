import React, { Component } from 'react'

export default class List extends Component {
    state = {
        players: []

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

    render() {
        const players = this.state.players.map( s => <li className="list">{s.name}<ul>Team: {s.team}</ul><ul>Position: {s.position}</ul><ul>Overall Rank: {s.rank}</ul><ul>ESPN Rating: {s.ESPNRating}</ul></li>)
        
        return (
            <div>
                {players}
            </div>
        )
    }
}
