import React from 'react'
import useStyles from './style'

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.Navbar}>
            <h1 className={classes.Logo}>Portfolio</h1>
            <div className={classes.Menu}>
            <ul className={classes.MenuList}>
            <li className={classes.MenuListItem}>About</li>
            <li className={classes.MenuListItem}>Projects</li>
            <li className={classes.MenuListItem}>Contact</li>
            </ul>
            </div>
            </div>
        </>
    )
}

export default Navbar
