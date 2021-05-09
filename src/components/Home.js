import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>NBA Player Tracker</h1>
            <hr/>
            <body className="intro" >
                <h2>
                    This Application is used to form a list of your favorite NBA basketball players.
                </h2>
                <br/>
                <h3 className="info">
                    To see the players the have been added to the database, click the "Players" button, there you can also add players to the database for use in your list.
                    To start making your list, click "My List"
                </h3>
            </body>
        </div>
    )
}

export default Home
