import headerImg from '../../assets/images/header.png'
import './Logo.css'

function Logo(): JSX.Element {
  return (
    <div id="logo">
      <img src={headerImg} alt="The Machinist Mind" height="50" />
      <span>Learn code</span>
    </div>
  )
}

export default Logo