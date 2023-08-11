import { useState } from 'react'
import css from './ItemQuestion.module.css'

// eslint-disable-next-line react/prop-types
function ItemQuestion ({ title, description }) {
  const [hiddenDescription, setHiddenDescription] = useState(true)

  const handleClick = () => {
    setHiddenDescription(!hiddenDescription)
  }

  return (
    <li className={css.question}>
      <div className={css.headerQuestion} onClick={handleClick}>
        {title}
        <button className={hiddenDescription ? '' : css.reverse}>
          <svg width='30px' height='30px' viewBox='0 0 24.00 24.00' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
            <g id='SVGRepo_iconCarrier'>
              <path d='M7 10L12 15L17 10' stroke={hiddenDescription ? '#5266df' : '#eb6060'} strokeWidth='1.8240000000000003' strokeLinecap='round' strokeLinejoin='round' />
            </g>
          </svg>
        </button>
      </div>

      <div className={`${css.description} ${hiddenDescription === true ? css.hidden : ''}`}>
        {description}
      </div>

      <span className={css.line} />
    </li>
  )
}
export default ItemQuestion
