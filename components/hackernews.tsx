import React, { ReactElement, useState } from "react";

interface Props {
  hackerLinks: HackerLink[];
}
export interface HackerLink {
  Url: string;
  Text: string;
  Score: string;
}

export function HackerNews({ hackerLinks }: Props): ReactElement {
  const [items, setItems] = useState<Array<HackerLink>>(hackerLinks);
  return (
    <div className="hacker-news">
      <h2>Hacker News</h2>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <a href={item.Url}>
              <span className="score">{item.Score}</span>
              <span className="text">{item.Text}</span>
            </a>
          </div>
        );
      })}
      <style jsx>{`
          a{display:flex; align-items:stretch;border-radius:6px;margin-bottom:0.75rem;background:#2d325a;overflow:hidden;padding:0; color:white;}
          .score{font-size:1.5rem;min-width:70px;font-weight:900; padding:0.5rem;background:#3958b8;display:flex;align-items:center; justify-content:center}
          .text{padding:1rem;display:block;}

        `}</style>
    </div>
  );
}
