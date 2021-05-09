import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    TextDecoration: 'none',
    color: 'white',
    background: 'blue',
    align: 'center'
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
            >Home</NavLink>
            <NavLink
            to="/players"
            exact
            style={linkStyle}
            activeStyle={{
                background: 'darkblue'
            }}
            >Players</NavLink>
                <NavLink
                to="/list"
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
                >My List</NavLink>
        </div>
    )
}

export default Navigation