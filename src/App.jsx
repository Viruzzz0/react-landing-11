import './App.css'
import InitialPage from './components/InitialPage/InitialPage'
import Header from './components/Header/Header'

function App () {
  return (
    <div className='page'>
      <Header />

      <main>
        <InitialPage />
      </main>
    </div>
  )
}

export default App
