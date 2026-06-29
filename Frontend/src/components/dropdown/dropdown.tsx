import { useState, useEffect } from 'react'
import type { JSX } from 'react'
import './Dropdown.css'

interface DropdownProps {
  label: string
  items: { label: string; href: string }[]
}

function Dropdown({ label, items }: DropdownProps): JSX.Element {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleClick() {
      setOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="dropdown">
      <a onClick={(e) => { e.stopPropagation(); setOpen(!open) }}>
        {label} ▾
      </a>
      {open && (
        <div className="dropdown-menu">
          {items.map((item, i) => (
            <a key={i} href={item.href}>{item.label}</a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown