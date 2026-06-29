import { useState, useRef } from 'react'
import sendBtn from '../../assets/images/sendbutton.png'
import './chatwindow.css'
import type { JSX } from 'react'


function ChatWindow(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showScroll, setShowScroll] = useState(false)

  function send() {
    if (input.trim() === '') return
    setMessages([...messages, input])
    setInput('')
  }
  function scrollToBottom() {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
}

  return (
  <div id="chatwindow" style={{position: 'relative'}}>
      <div 
          id="messages"
          onScroll={(e) => {
          const el = e.currentTarget
          const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 500
          setShowScroll(!atBottom)
         }}
         >
         {messages.map((msg, i) => (
         <div key={i} className="message">{msg}</div>
         ))}
        <div ref={messagesEndRef} />
      </div>
    {showScroll && <button id="scroll-btn" onClick={scrollToBottom}>↓</button>}
    <div id="input-area">
      <textarea 
        id="input" 
        placeholder="Ready To Start   Yes/No (select)?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            send()
          }
        }}
      />
      <button id="send" onClick={send}>
        <img src={sendBtn} alt="send" height="50" />
      </button>
    </div>
  </div>
)
}

export default ChatWindow