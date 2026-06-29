import { Link } from 'react-router-dom'
import type { JSX } from 'react'
import './homebutton.css'

function HomeButton(): JSX.Element {
  return (
    <Link to="/" id="home-btn">⛺</Link>
  )
}

export default HomeButton