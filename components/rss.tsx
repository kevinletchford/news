import React, { ReactElement, useState } from "react";

interface Props {
  title: string;
  columns?: number;
  rssLinks: RssLink[];
}
export interface RssLink {
  Title: string;
  Link: string;
}

export function Rss({ title, columns, rssLinks }: Props): ReactElement {
  const [items, setItems] = useState<Array<RssLink>>(rssLinks);
  return (
    <div className="rss">
      <h2>{title}</h2>
      <div className="columns">
        {items === null || items === undefined ? (
          <div>Fail</div>
        ) : (
          <>
            {items.map((item, i) => {
              return (
                <div key={i}>
                  <a href={item.Link}>{item.Title}</a>
                </div>
              );
            })}
          </>
        )}
      </div>

      <style jsx>{`
        a {
          display: flex;
          align-items: stretch;
          border-radius: 6px;
          margin-bottom: 0.75rem;
          background: var(--button-background);
          overflow: hidden;
          padding: 0.5rem 1rem;
        }

        .columns {
          column-count: ${columns};
        }
      `}</style>
    </div>
  );
}
