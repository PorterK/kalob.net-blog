import React from 'react'
import styles from './NotFoundPage.module.css'
import ReactGA from 'react-ga';

// Note that create-react-navi-app will always show an error screen when this
// is rendered. This is because the underlying react-scripts package shows
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
function NotFoundPage() {
  ReactGA.set({ path: window.location.pathname });
  ReactGA.pageview('not-found');

  return (
    <div className={styles.NotFound}>
      <h1>404 - Not Found</h1>
    </div>
  )
}

export default NotFoundPage