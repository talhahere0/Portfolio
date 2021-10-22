import React,{useContext} from 'react'
import Sun from '../../image/sun.png'
import Moon from '../../image/moon.png'
import './Toggle.css'
import {ThemeContext} from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type: 'TOGGLE'})
    }
    return (
        <>
        <div className="t">
        <img src={Sun} alt="" className="toggle-icon"/>
        <img src={Moon} alt="" className="toggle-icon" />
        <div  className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 25}}></div>
        </div>
            
        </>
    )
}

export default Toggle
