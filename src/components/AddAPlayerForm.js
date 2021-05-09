import React, { Component } from 'react'
import MyList from './MyList'

export default class AddAPlayerForm extends Component {
    state = {
        name: '',
        team: '',
        position: '',
        rank: '',
        ESPNRating: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3002/newlist', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log("New Player", data)
            this.props.history.push('/list')
        })
    }

    render() {
        return (
            <div>
                <MyList />
                <form onSubmit={this.handleSubmit}>
                    <label>Player Name:</label>
                    <br/>
                    <input name='name' value={this.state.name}onChange={this.handleChange} type='text'/>
                    <br/>
                    <label>Team:</label>
                    <br/>
                    <input name='team' value={this.state.team}onChange={this.handleChange} type='text'/>
                    <br/>
                    <label>Position:</label>
                    <br/>
                    <input name='position' value={this.state.position}onChange={this.handleChange} type='text'/>
                    <br/>
                    <label>Overall Rank:</label>
                    <br/>
                    <input name='rank' value={this.state.rank}onChange={this.handleChange} type='text'/>
                    <br/>
                    <label>ESPN Rating:</label>
                    <br/>
                    <input name='ESPNRating' value={this.state.ESPNRating}onChange={this.handleChange} type='text'/>
                    <br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
