import type { JSX } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home(): JSX.Element {
  return (
    <div id="home">
      <h1>The Machinist Mind</h1>
      <p>Quiz, Battle, Ranked every day</p>
      <Link to="/play">Start Playing →</Link>
    </div>
  )
}

export default Home