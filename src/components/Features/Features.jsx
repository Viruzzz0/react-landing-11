import css from './Features.module.css'
import illustrationFeatures from '../../../images/illustration-features-tab-1.svg'

function Features () {
  return (
    <section className={css.section}>
      <div className={css.conteinerText}>
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your
          favourite websites. Your bookmarks sync between your devices
          so you can access them on the go.
        </p>
      </div>
      <div className={css.conteinerViewTab}>
        <ul>
          <span className={css.line} />
          <li>Simple Bookmarking</li>
          <span className={css.line} />
          <li>Speedy Searching</li>
          <span className={css.line} />
          <li>Easy Sharing</li>
          <span className={css.line} />
        </ul>
        <div className={css.conteinerIllustration}>
          <img src={illustrationFeatures} alt='' />
          <div className={css.backgroundCard} />

        </div>
      </div>
    </section>
  )
}

export default Features
