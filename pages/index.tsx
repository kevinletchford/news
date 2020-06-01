import Head from 'next/head'
import { useState, useEffect, useRef } from "react";
import { NextPage } from 'next'
import {Dribbble, DribbbleImage} from './../components/dribbble';
import {HackerNews, HackerLink} from './../components/hackernews';
import {Rss, RssLink}  from './../components/rss';
import {GetThemeFromCookie} from './../common/theme';
import Menu from './../components/menu'
import { server, getData } from './../common/server';

interface Props {
  dribbbleImages: DribbbleImage[]
  hackerLinks: HackerLink[]
  coDrops: RssLink[]
  cssTricks: RssLink[]
}


const Home: NextPage<Props> = ({ dribbbleImages, hackerLinks, coDrops, cssTricks }) => {

  useEffect(() => {
      GetThemeFromCookie()
  });

  return(
    <div>
      <Menu />
    <div className="grid">
      <Dribbble dribbbleImages={dribbbleImages} />
      <div>
      <Rss title="CSS Tricks" rssLinks={cssTricks} />
      <Rss title="CoDrops" columns={2} rssLinks={coDrops} />
      </div>
      <HackerNews hackerLinks={hackerLinks} />
    </div>
    </div>

  )
}

Home.getInitialProps = async ({ }) => {
  const dribbbleJson = await getData(`${server}/api/dribbble`)
  const hackerJson = await getData(`${server}/api/hackernews`)
  const cssTricks = await getData(`${server}/api/rss?rssfeed=https://css-tricks.com/feed/`)
  const coDrops = await getData(`${server}/api/rss?rssfeed=https://tympanus.net/codrops/collective/feed/`)
  return {  
    dribbbleImages: dribbbleJson, 
    hackerLinks: hackerJson, 
    cssTricks: cssTricks, 
    coDrops: coDrops }
}

export default Home