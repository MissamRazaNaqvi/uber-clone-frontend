import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div> 
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/signup">Signup</Link>

      <Link to="/login">Login</Link>

      <Link to="/captain/signup">
        Captain Signup
      </Link>

      <Link to="/captain/login">
        Captain Login
      </Link>
  </div>
  )
}
