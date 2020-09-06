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

  const [filter, setFilter] = useState<string | null>();

  async function getGithubData(filter) {
    if (filter != null) {
      const githubJson = await getData(
        `${server}/api/github?language=${filter}`
      );
      setItems(githubJson);
    }
  }

  useEffect(() => {
    getGithubData(filter);
  }, [items, filter]);

  return (
    <div className="github-repositories">
      <div className="section-header-container">
        <h2>Top Github Repos</h2>
        <select
          className="github-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Language</option>
          <option value="c%23?">C#</option>
          <option value="css">css</option>
          <option value="javascript">javascript</option>
          <option value="rust">rust</option>
          <option value="typescript">typescript</option>
          <option value="go">go</option>
        </select>
      </div>
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
        .section-header-container {
          display: flex;
          align-items: center;
        }
        .github-select {
          margin-left: auto;
          background: var(--background);
          border: none;
          color: white;
          padding: 1rem;
          outline: none;
          margin-right: 1rem;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
