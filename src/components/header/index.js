import React from 'react'
import './styles.scss'

const Header = () => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
            <div className="logo">
            <img data-test="logocomponent" src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="logo" />
            </div>
            
            </div>
       
        </header>
    )
}

export default Header
