import { useState, useRef } from 'react'
import css from './Promotion.module.css'

function Promotion () {
  const [isValid, setValid] = useState(true)
  const emailRef = useRef(null)

  const handleSubmitEmail = (event) => {
    event.preventDefault()
    console.log(emailRef.current.value)
    const emailValue = emailRef.current.value

    if (!isNaN(emailValue)) {
      console.log('is number: ', emailValue)
      setValid(false)
    }

    emailRef.current.focus()
  }

  return (
    <section className={css.section}>
      <div className={css.container}>
        <p>35.000+ ALREADY JOINED</p>
        <h3>{`Stay up-to-date with what
          we're doing`}
        </h3>
        <form
          className={css.formContainer}
          action=''
          onSubmit={handleSubmitEmail}
        >
          <div className={`${css.inputContainer} ${isValid ? '' : css.inputError}`}>
            <div>
              <input
                type='text'
                name='email'
                id='email'
                ref={emailRef}
                placeholder='Enter your email acrdress'
                required
              />
              {
                !isValid && (
                  <svg width='25px' height='25px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
                    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                    <g id='SVGRepo_iconCarrier'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z' fill='#fc5858' />
                    </g>
                  </svg>
                )
              }
            </div>
            {!isValid && (<p>test de texto de error</p>)}
          </div>

          <button type='submit'>Contact us</button>
        </form>
      </div>
    </section>
  )
}

export default Promotion
