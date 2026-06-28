import { useState } from 'react'
import Login from './features/auth/login'
import Navbar from './components/navbar/navbar'
import ChatWindow from './features/chat/chatwindow'
import Logo from './components/logo/logo'
import './App.css'
import Levelselect from './features/level/levelselect'
import Footer from './components/footer/footer'

function App() {
  const [modalOPEN, setModalOpen] = useState(false)
  {modalOPEN && <Login onClose={() => setModalOpen(false)} />}

  return (
    <>
      <div id="app">
        <div id="left">
          <Logo />
          <ChatWindow />
        </div>
        <div id="right">
          <Navbar onAccountClick={() => setModalOpen(true)} />
          <Levelselect />
        </div>
      </div>
      <Footer />
      {modalOPEN && <Login onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default App