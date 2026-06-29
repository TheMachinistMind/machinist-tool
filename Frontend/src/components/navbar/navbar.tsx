import type { JSX } from 'react'
import './navbar.css'
import Dropdown from '../dropdown/dropdown'

function Navbar({ onAccountClick }: { onAccountClick: () => void }): JSX.Element {
  return (
    <nav id="nav">
      <Dropdown 
        label="Playmode"
        items={[
          { label: 'Python', href: '#' },
          { label: 'JavaScript', href: '#' }
        ]}
      />
      <a href="#">Community</a>
      <a href="#">Leaderboards</a>
      <a onClick={onAccountClick}>Account</a>
    </nav>
  );
}

export default Navbar