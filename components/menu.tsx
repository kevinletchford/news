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
            <button className="burger" onClick={() => {setMenuOpen(!menuOpen)}}><Burger /></button>
            
            <div className={ menuOpen ? "dropdown dropdown_open": "dropdown dropdown_closed"}>
                <button className="cross" onClick={() => {setMenuOpen(!menuOpen)}}><Cross /></button>
                <button onClick={() => {SetTheme(ThemeName.blue)}}>Blue</button>
                <button onClick={() => {SetTheme(ThemeName.light)}}>Light</button>
            </div>
            <style jsx>{`
            .burger,
            .cross{
            width:34px;
            height:26px;
            color:var(--link);
            }

            .cross{
            background:none;
            position:absolute;
            top:0.5rem;
            right:0.5rem;
            border-radius:100px;
            width:30px;
            height:30px;
            padding:5px;
            font-size:1rem;
            }

            `}</style>
        </div>
    )
}