import css from './Features.module.css'
import illustrationFeatures1 from '../../../images/illustration-features-tab-1.svg'
import illustrationFeatures2 from '../../../images/illustration-features-tab-2.svg'
import illustrationFeatures3 from '../../../images/illustration-features-tab-3.svg'
import { useState } from 'react'

const tabs = {
  SIMPLE_BOOKMARKIN: 'SIMPLE_BOOKMARKIN',
  SPEEDY_SEARCHING: 'SPEEDY_SEARCHING',
  EASY_SHARING: 'EASY_SHARING'
}

function Features () {
  const [selectTab, setSelectTab] = useState(tabs.SIMPLE_BOOKMARKIN)

  return (
    <section className={css.section}>
      <div className={css.conteinerText}>
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your
          favourite websites. Your bookmarks sync between your devices
          so you can access them on the go.
        </p>
      </div>
      <div className={css.listSelect}>
        <ul>
          <li onClick={() => setSelectTab(tabs.SIMPLE_BOOKMARKIN)}>Simple Bookmarking</li>
          <span className={css.line}>
            <span className={selectTab === tabs.SIMPLE_BOOKMARKIN ? css.selectedlLine : ''} />
          </span>
          <li onClick={() => setSelectTab(tabs.SPEEDY_SEARCHING)}>Speedy Searching</li>
          <span className={css.line}>
            <span className={selectTab === tabs.SPEEDY_SEARCHING ? css.selectedlLine : ''} />
          </span>
          <li onClick={() => setSelectTab(tabs.EASY_SHARING)}>Easy Sharing</li>
          <span className={css.line}>
            <span className={selectTab === tabs.EASY_SHARING ? css.selectedlLine : ''} />
          </span>
        </ul>
      </div>
      <Tabs selectTab={selectTab} />
    </section>
  )
}

function Tabs ({ selectTab }) {
  const tabContent = {
    [tabs.SIMPLE_BOOKMARKIN]: {
      imgSrc: illustrationFeatures1,
      heading: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    [tabs.SPEEDY_SEARCHING]: {
      imgSrc: illustrationFeatures2,
      heading: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    [tabs.EASY_SHARING]: {
      imgSrc: illustrationFeatures3,
      heading: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
  }

  const selectedTab = tabContent[selectTab]

  return (
    <div className={css.conteinerViewTab}>
      <div className={css.conteinerIllustration}>
        {selectedTab && <img src={selectedTab.imgSrc} alt='' />}
        <div className={css.backgroundCard} />
      </div>
      <div className={css.conteinerTextTab}>
        {selectedTab && (
          <>
            <h2>{selectedTab.heading}</h2>
            <p>{selectedTab.description}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Features
