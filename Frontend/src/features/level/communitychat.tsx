import './communitychat.css'
import { useState } from 'react'

function CommunityChat() {
  const [messages, setMessages] = useState([
    { user: 'System', text: 'Welcome to the community chat!', time: '12:00' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`
    setMessages(prev => [...prev, { user: 'You', text: input, time }])
    setInput('')
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div id="community-chat">
      <div id="chat-header">
        <strong>Community Chat</strong>
      </div>
      <div id="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className="chat-message">
            <span className="chat-user">{msg.user}</span>
            <span className="chat-text">{msg.text}</span>
            <span className="chat-time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div id="chat-input-row">
        <input
          type="text"
          placeholder="Say something..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default CommunityChat