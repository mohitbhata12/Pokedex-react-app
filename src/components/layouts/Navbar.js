import React, { Component } from 'react'
import styled from 'styled-components'
import Pokedex from '../assets/pokedex.png'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <img src={Pokedex} className='pokedex'></img>
                    <a href="" className="nav">Pokedex</a>
                </nav>
            </div>
        )
    }
}
