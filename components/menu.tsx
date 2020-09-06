import React, { ReactElement, useState } from "react";
import Burger from "../svg/align-right-solid.svg";
import Cross from "../svg/times-regular.svg";
import { ThemeName, SetTheme } from "./../common/theme";
import Link from "next/link";
import DribbbleSVG from "../svg/dribbble-brands.svg";
import HackerNewsSVG from "../svg/hacker-news-square-brands.svg";
import GithubSVG from "../svg/github-brands.svg";
import RSSSVG from "../svg/rss-solid.svg";
import ActiveLink from "./activeLink";

interface Props {}

export default function Menu({}: Props): ReactElement {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  return (
    <div className="menu">
      <div className="menu__items">
        <ActiveLink href="/">
          <img className="logo" src="/img/ultr-72.png" />
        </ActiveLink>
        <ActiveLink href="/dribbble">
          <DribbbleSVG />
        </ActiveLink>
        <ActiveLink href="/rss">
          <RSSSVG />
        </ActiveLink>
        <ActiveLink href="/hackernews">
          <HackerNewsSVG />
        </ActiveLink>
        <button
          className={menuOpen ? "burger link_active" : "burger"}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Burger />
        </button>
      </div>

      <div
        className={
          menuOpen ? "dropdown dropdown_open" : "dropdown dropdown_closed"
        }
      >
        <h3>Themes</h3>
        <button
          onClick={() => {
            SetTheme(ThemeName.blue);
          }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            SetTheme(ThemeName.light);
          }}
        >
          Light
        </button>
      </div>
      <style jsx>{`
        h3 {
          margin-bottom: 1rem;
          font-weight: 300;
        }

        .cross {
          width: 34px;
          height: 26px;
          color: var(--link);
        }

        .cross {
          background: none;
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          border-radius: 100px;
          width: 30px;
          height: 30px;
          padding: 5px;
          font-size: 1rem;
        }

        .logo {
          width: 40px;
        }
      `}</style>
    </div>
  );
}
