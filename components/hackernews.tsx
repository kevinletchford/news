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
      {items===null||items===undefined ? <div>Fail</div>: <> 
      {items.map((item, i) => {
        return (
          <div key={i}>
            <a href={item.Url}>
              <span className="score">{item.Score}</span>
              <span className="text">{item.Text}</span>
            </a>
          </div>
        );
      })}</>}
      <style jsx>{`
        a {
          display: flex;
          align-items: stretch;
          border-radius: 6px;
          margin-bottom: 0.75rem;
          background: var(--button-background);
          overflow: hidden;
          padding: 0;
        }
        .score {
          font-size: 1.5rem;
          min-width: 82px;
          font-weight: 900;
          padding: 0.5rem;
          background: var(--highlight);
          color: var(--highlight-text);
          display: flex;
          align-items: center;
          justify-content: center;

        }
        .text {
          padding: 1rem;
          display: block;
        }
      `}</style>
    </div>
  );
}
