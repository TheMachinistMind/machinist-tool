import { useState } from 'react'
import Login from '../../features/auth/login'
import Navbar from '../../components/navbar/navbar'
import ChatWindow from '../../features/chat/chatwindow'
import Logo from '../../components/logo/logo'
import CommunityChat from '../../features/communitychat/communitychat'
import Footer from '../../components/footer/footer'
import HomeButton from '../../components/homebutton/homebutton'
import './play.css'

export default function Play() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div id="app">
        <div id="left">
          <div id="logo-row">
            <HomeButton />
            <Logo />
          </div>
          <ChatWindow />
        </div>
        <div id="right">
          <Navbar onAccountClick={() => setModalOpen(true)} />
          <CommunityChat />
        </div>
      </div>
      <Footer />
      {modalOpen && <Login onClose={() => setModalOpen(false)} />}
    </>
  )
}