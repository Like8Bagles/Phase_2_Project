import React, { Component } from 'react'

export default class The_stuff extends Component {
    state = {
        stuff: []
    }

    componentDidMount() {
        fetch("")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                stuff: data
            })
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
