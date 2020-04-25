import React from 'react'
import { Link } from 'react-navi'
import styles from './TagIndexPage.module.css'
import ReactGA from 'react-ga';

function TagIndexPage(props) {
  ReactGA.set({ path: '/tags' });
  ReactGA.pageview('tags');

  return (
    <div className={styles.TagIndexPage}>
      <h1>Tags</h1>
      <ul>
        {props.tags.map(tag =>
          <li key={tag.href}>
            <Link href={tag.href}>{tag.name} ({tag.count})</Link>
          </li>  
        )}
      </ul>
    </div>
  )
}

export default TagIndexPage