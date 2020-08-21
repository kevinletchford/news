import { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import {Rss, RssLink}  from './../components/rss';
import { server, getData } from './../common/server';

interface Props {
    coDrops: RssLink[]
    cssTricks: RssLink[]
}


const RssPage:NextPage<Props> = ({coDrops, cssTricks}) =>{
    return (
        <div className="padding_h">
            <Rss title="CSS Tricks" rssLinks={cssTricks} />
            <Rss title="CoDrops" columns={2} rssLinks={coDrops} />
        </div>
    )
}

RssPage.getInitialProps = async ({}) =>{
    const cssTricks = await getData(`${server}/api/rss?rssfeed=https://css-tricks.com/feed/`)
    const coDrops = await getData(`${server}/api/rss?rssfeed=https://tympanus.net/codrops/collective/feed/`)
    return{ cssTricks: cssTricks, 
        coDrops: coDrops}
}

export default RssPage