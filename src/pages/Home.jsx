import React, { useContext } from 'react'
import { Link } from 'react-router'
import { UserContext } from '../context/AuthContext';

export default function Home() {
  const { user } = useContext(UserContext);

  console.log(user, "user from context");

  return (
    <div>
      Welcome {user?.name}

      <header>

        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/signup">Signup</Link>

        <Link to="/login">Login</Link>

        <Link to="/captain/signup">
          Captain Signup
        </Link>

        <Link to="/captain/login">
          Captain Login
        </Link>
      </header>
    </div>
  )
}
