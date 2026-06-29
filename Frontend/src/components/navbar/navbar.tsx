import './navbar.css';
import type { JSX } from 'react'
function Navbar({ onAccountClick }: { onAccountClick: () => void }): JSX.Element {
  return (
    <nav id="nav">
      <a href="#">Playmode</a>
      <a href="#">community</a>
      <a href="#">Leaderboards</a>
      <a onClick={onAccountClick}>Account</a>
    </nav>
  );
}
    
export default Navbar