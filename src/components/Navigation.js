import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    TextDecoration: 'none',
    color: 'white'
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
            to="/yada"
            exact
            style={linkStyle}
            activeStyle={{
                background: 'darkblue'
            }}
            >Yada</NavLink>
                <NavLink
                to="/daba"
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Dada</NavLink>
        </div>
    )
}

export default Navigation