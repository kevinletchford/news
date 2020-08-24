import React, { ReactElement, useState, useEffect } from "react";
import Star from "../svg/star-solid.svg";
import { getData, server } from "../common/server";

interface Props {
  gitHubRepositories: GithubRepository[];
}

export interface GithubRepository {
  Url: string;
  OwnerName: string;
  RepositoryName: string;
  Description: string;
  StarsToday: string;
}

export function GitHub({ gitHubRepositories }: Props): ReactElement {
  const [items, setItems] = useState<Array<GithubRepository>>(
    gitHubRepositories
  );

  const currentLanguage = async (event: React.FormEvent<HTMLSelectElement>) => {
    const language = event.currentTarget.value;
    if (language !== "") {
      await getData(`${server}/api/github?=language=${language}`).then((y) => {
        console.log(y);
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="github-repositories">
      <h2>
        Top Github Repos
        <select onChange={currentLanguage}>
          <option value="">Language</option>
          <option value="c%23?">C#</option>
          <option value="css">css</option>
          <option value="javascript">javascript</option>
          <option value="rust">rust</option>
          <option value="typescript">typescript</option>
          <option value="go">go</option>
        </select>
      </h2>
      {items === null || items === undefined ? (
        <div>None</div>
      ) : (
        <>
          {items.map((item, i) => {
            return (
              <div key={i} className="repo">
                <a href={`https://github.com${item.Url}`}>
                  <span className="score">
                    <small>
                      <span className="star">
                        <Star />
                      </span>
                      {item.StarsToday}
                      <div className="today">today</div>
                    </small>
                  </span>
                  <span className="text">
                    <b className="owner">{item.OwnerName}</b>{" "}
                    <span className="repoName">{item.RepositoryName}</span>
                    <span className="description">{item.Description}</span>
                  </span>
                </a>
              </div>
            );
          })}
        </>
      )}
      <style jsx>{`
        .repo a {
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
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .text {
          padding: 1rem;
          display: block;
          margin-right: auto;
          display: flex;
          flex-wrap: wrap;
        }

        .repoName {
          font-style: italic;
          margin-left: 0.5rem;
        }

        .stars-today {
          padding-right: 1rem;
        }

        .description {
          width: 100%;
        }

        .today {
          font-size: 14px;
          text-align: center;
          font-weight: normal;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}
