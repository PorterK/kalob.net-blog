import React from 'react'
import ArticleSummary from './ArticleSummary'
import styles from './TagPage.module.css'
import ReactGA from 'react-ga';

function TagPage({ blogRoot, name, routes }) {
  ReactGA.set({ path: `/tags/${name}` });
  ReactGA.pageview(`tag-${name}`);

  return (
    <div className={styles.TagPage}>
      <h1>{name} posts</h1>
      <ul>
        {routes.map(route =>
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>  
        )}
      </ul>
    </div>
  )
}

export default TagPage