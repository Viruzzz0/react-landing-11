import css from './Features.module.css'

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
      <div>
        <ul>
          <li>Simple Bookmarking</li>
          <li>Speedy Searching</li>
          <li>Easy Sharing</li>
        </ul>
      </div>
    </section>
  )
}

export default Features
