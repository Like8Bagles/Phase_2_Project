import React, { Component } from 'react'

export default class NewPlayerButton extends Component {

    onClick = (e) =>  {
        e.preventDefault()
        this.props.redirect.push('/list/new')
    }
    render() {
        return (
            <button onClick={this.onClick} >
                Add a Player!
            </button>
        )
    }
}
