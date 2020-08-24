import Head from "next/head";
import { NextPage } from "next";
import { Dribbble, DribbbleImage } from "./../components/dribbble";
import { HackerNews, HackerLink } from "./../components/hackernews";
import { Rss, RssLink } from "./../components/rss";
import { server, getData } from "./../common/server";
import { GitHub, GithubRepository } from "../components/github";

interface Props {
  dribbbleImages: DribbbleImage[];
  hackerLinks: HackerLink[];
  coDrops: RssLink[];
  cssTricks: RssLink[];
  github: GithubRepository[];
}

const Home: NextPage<Props> = ({
  dribbbleImages,
  hackerLinks,
  coDrops,
  cssTricks,
  github,
}) => {
  return (
    <div>
      <div className="grid">
        <Dribbble dribbbleImages={dribbbleImages} />
        <div>
          <GitHub gitHubRepositories={github} />
          <Rss title="CSS Tricks" rssLinks={cssTricks} />
          <Rss title="CoDrops" columns={2} rssLinks={coDrops} />
        </div>
        <HackerNews hackerLinks={hackerLinks} />
      </div>
    </div>
  );
};

Home.getInitialProps = async ({}) => {
  const dribbbleJson = await getData(`${server}/api/dribbble`);
  const hackerJson = await getData(`${server}/api/hackernews`);
  const githubJson = await getData(`${server}/api/github`);
  const cssTricks = await getData(
    `${server}/api/rss?rssfeed=https://css-tricks.com/feed/`
  );
  const coDrops = await getData(
    `${server}/api/rss?rssfeed=https://tympanus.net/codrops/collective/feed/`
  );
  return {
    dribbbleImages: dribbbleJson,
    hackerLinks: hackerJson,
    cssTricks: cssTricks,
    coDrops: coDrops,
    github: githubJson,
  };
};

export default Home;
