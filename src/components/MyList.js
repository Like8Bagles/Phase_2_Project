import React, { Component } from 'react'
import NewPlayerButton from './NewPlayerButton'
import List from '../containers/List'

export default class MyList extends Component {

    

    render() {
        
        return (
            <div>
                <h2>
                    My List!
                </h2>
                <body>
                    How many likes?
                </body>
                <br/>
                <List />
                <br/>
                <NewPlayerButton redirect = {this.props.history}/>
            </div>
        )
    }
}
