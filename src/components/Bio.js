import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "kalob@kalob.net",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        This is where I give my opinion on tech, programming, and startups.
        <br />
        <br />
        <a href="https://twitter.com/porter_kalob">@porter_kalob</a>
        {' '}•{' '}
        <a href="mailto:kalob@kalob.net">kalob@kalob.net</a>
      </p>
    </div>
  )
}

export default Bio
