import { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import { HackerLink, HackerNews } from "./../components/hackernews";
import { server, getData } from './../common/server';

interface Props {
    hackerLinks: HackerLink[]
}


const HackernewsPage:NextPage<Props> = ({hackerLinks}) =>{
    return (
        <div className="padding_h">
            <HackerNews hackerLinks={hackerLinks} />
        </div>
    )
}

HackernewsPage.getInitialProps = async ({}) =>{
    const hackerJson = await getData(`${server}/api/hackernews`)
    return{hackerLinks: hackerJson}
}

export default HackernewsPage