import { useState, useRef } from 'react'

function useValidation () {
  const [valid, setValid] = useState({
    errorMessage: '',
    isValid: true
  })
  const emailRef = useRef(null)

  const showError = (message) => {
    setValid({
      errorMessage: message,
      isValid: false
    })
  }

  const validarFormatoEmail = (email) => {
    const formatoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return formatoEmail.test(email)
  }

  const handleSubmitEmail = (event) => {
    event.preventDefault()
    console.log(emailRef.current.value)
    const emailValue = emailRef.current.value

    if (!isNaN(emailValue)) {
      showError('Invalid entry, you can not only put numbers')
    } else if (!validarFormatoEmail(emailValue)) {
      showError('Email incorrecto. Asegúrate de usar el formato correcto')
    }

    emailRef.current.focus()
  }

  return {
    valid,
    emailRef,
    handleSubmitEmail
  }
}

export default useValidation
