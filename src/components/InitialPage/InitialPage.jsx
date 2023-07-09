import css from './InitialPage.module.css'
import illustration from '../../../images/illustration-hero.svg'

function InitialPage () {
  return (
    <section className={css.section}>
      <div className={css.conteinerIllustration}>
        <img src={illustration} alt='' />
        <div className={css.backgroundCard} />
      </div>
      <div className={css.conteinerHome}>
        <div>

          <h2>A Simple Bookmark
            Manager
          </h2>
          <p>A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className={css.conteinerButton}>

            <button>
              Get it on Chrome
            </button>
            <button>
              Get it on Firefox
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default InitialPage
