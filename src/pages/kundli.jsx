import React from 'react'
import { useLocation } from 'react-router-dom';

const Kundli = () => {

  const location = useLocation();
  const { fullName } = location.state || {}; 

  return(
        <div>
            <h1>Welcome to the New Page!</h1>
            {/* Display the name if it exists */}
            {fullName ? <p>Hello, {fullName}!</p> : <p>No name provided.</p>}
        </div>
  )
}

export default Kundli
