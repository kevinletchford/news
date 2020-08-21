import React, { ReactElement,useState } from 'react'
import Burger from '../svg/align-right-solid.svg';
import Cross from '../svg/times-regular.svg';
import {ThemeName,SetTheme}  from './../common/theme';
import Link from 'next/link';
import DribbbleSVG from '../svg/dribbble-brands.svg';
import HackerNewsSVG from '../svg/hacker-news-square-brands.svg';
import GithubSVG from '../svg/github-brands.svg';
import RSSSVG from '../svg/rss-solid.svg';

interface Props {
    
}

export default function Menu({}: Props): ReactElement {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    return (
        <div className="menu">
            <div className="menu__items">
                <Link href="/dribbble"><a><DribbbleSVG /></a></Link>
                <Link href="/rss"><a><RSSSVG /></a></Link>
                <Link href="/hackernews"><a><HackerNewsSVG /></a></Link>
                <button className="burger" onClick={() => {setMenuOpen(!menuOpen)}}><Burger /></button>
            </div>

            <div className={ menuOpen ? "dropdown dropdown_open": "dropdown dropdown_closed"}>
                <button className="cross" onClick={() => {setMenuOpen(!menuOpen)}}><Cross /></button>
                <h3>Themes</h3>
                <button onClick={() => {SetTheme(ThemeName.blue)}}>Blue</button>
                <button onClick={() => {SetTheme(ThemeName.light)}}>Light</button>
            </div>
            <style jsx>{`

            h3{
                margin-bottom:1rem;
                font-weight:300;
            }
            
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