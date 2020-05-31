import React, { ReactElement,useState } from 'react'
import Burger from '../svg/align-right-solid.svg';
import Cross from '../svg/times-regular.svg';
import {ThemeName,SetTheme}  from './../common/theme';

interface Props {
    
}



export default function Menu({}: Props): ReactElement {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);


    

    return (
        <div className="menu">
            <button onClick={() => {setMenuOpen(!menuOpen)}}><span className="burger"><Burger /></span></button>
            
            <div className={ menuOpen ? "dropdown dropdown_open": "dropdown dropdown_closed"}>
                <button onClick={() => {setMenuOpen(!menuOpen)}}><span className="cross"><Cross /></span></button>
                <button onClick={() => {SetTheme(ThemeName.blue)}}>Blue</button>
                <button onClick={() => {SetTheme(ThemeName.light)}}>Light</button>
            </div>
     
        </div>
    )
}