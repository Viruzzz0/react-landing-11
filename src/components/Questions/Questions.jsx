import React from 'react'
import css from './Questions.module.css'

function Questions () {
  return (
    <section className={css.section}>
      <div className={css.containerDescription}>
        <h3>Frequently Asked Questions</h3>
        <p>Here are some of our FAQs. If you have any other questions
          you'd like answered please feel free to email us.
        </p>
      </div>
      <div className={css.containerQuestion}>
        <ul>
          <li>What is Bookmark?</li>
          <li>How can I request a new browser?</li>
          <li>Is there a mobile app?</li>
          <li>What about other Chromium browsers?</li>
        </ul>
      </div>
    </section>
  )
}

export default Questions
