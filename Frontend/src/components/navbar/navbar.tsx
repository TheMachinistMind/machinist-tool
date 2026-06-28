import './navbar.css';
import type { JSX } from 'react'
function Navbar({ onAccountClick }: { onAccountClick: () => void }): JSX.Element {
  return (
    <nav id="nav">
      <a href="#">My Courses</a>
      <a href="#">Exams</a>
      <a href="#">Chats</a>
      <a onClick={onAccountClick}>Account</a>
    </nav>
  );
}
    
export default Navbar