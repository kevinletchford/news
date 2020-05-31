import React, { ReactElement,useState } from 'react'
import Burger from '../svg/align-right-solid.svg';
import Cross from '../svg/times-regular.svg';

interface Props {
    
}

const setColorCookie = (color:string) =>{
    document.cookie = `color=${color}`;
}

export default function Menu({}: Props): ReactElement {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const setLight = () =>{
        document.documentElement.style.setProperty('--background', 'white');
        document.documentElement.style.setProperty('--header', '#367cfa');
        document.documentElement.style.setProperty('--button-background', '#eff5ff');
        document.documentElement.style.setProperty('--highlight', '#367cfa');
        document.documentElement.style.setProperty('--highlight-text', 'white');
        document.documentElement.style.setProperty('--link', '#001f69');
        setColorCookie('light');
    }

    const setBlue = () =>{
        document.documentElement.style.setProperty('--background', '#25294a');
        document.documentElement.style.setProperty('--header', 'rgba(255, 255, 255, 0.65)');
        document.documentElement.style.setProperty('--button-background', '#2d325a');
        document.documentElement.style.setProperty('--highlight', '#3958b8');
        document.documentElement.style.setProperty('--highlight-text', '#fff');
        document.documentElement.style.setProperty('--link', '#fff');
        setColorCookie('blue');
    }
    

    return (
        <div className="menu">
            <button onClick={() => {setMenuOpen(!menuOpen)}}><Burger className="burger" /></button>
            
            <div className={ menuOpen ? "dropdown dropdown_open": "dropdown dropdown_closed"}>
                <button onClick={() => {setMenuOpen(!menuOpen)}}><Cross className="cross" /></button>
                <button onClick={() => {setBlue()}}>Blue</button>
                <button onClick={() => {setLight()}}>Light</button>
            </div>
     
        </div>
    )
}