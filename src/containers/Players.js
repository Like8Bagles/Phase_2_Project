import React, { Component } from 'react'

export default class Players extends Component {
    state = {
        players: []
    }

    componentDidMount() {
        fetch("http://localhost:3001/players")
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
                <h3>NBA Players</h3>
                <hr/>
                {players}
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
