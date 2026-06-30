import { useState } from 'react'
import type { JSX } from 'react'
import './login.css'

function Login({ onClose }: { onClose: () => void }): JSX.Element {
  const [nezet, setNezet] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  return (
    <div id="modal" onClick={onClose}>
      <div id="login-box" onClick={(e) => e.stopPropagation()}>
        {nezet === 'login' ? (
          <form onSubmit={(e) => { e.preventDefault() }}>
            <div id="Login">
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="passwords-wrapper">
                <div className="passwords-inputs">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="button" className="show-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <button type="submit">Login</button>
              <p onClick={() => setNezet('register')}>No account? Register</p>
              <p>Forgot password?</p>
            </div>
          </form>
        ) : (
          <form onSubmit={async (e) => {
            e.preventDefault()
            if (password !== confirmPassword) {
              setError('Passwords do not match!')
              return
            }
            setError('')
            const response = await fetch('http://localhost:3000/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, email, password })
            })
            const data = await response.json()
            if (response.ok) {
              onClose()
            } else {
              setError(data.message)
            }
          }}>
            <div id="Register">
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="passwords-wrapper">
                <div className="passwords-inputs">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="button" className="show-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit">Register</button>
              <p onClick={() => setNezet('login')}>Already have an account? Login</p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Login