import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <p>Nothing found. Please try again... <Link to='/'>Home page</Link></p>
    </div>
  )
}

export default NotFound
