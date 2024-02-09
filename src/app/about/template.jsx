import Link from 'next/link'
import React from 'react'

function template({children}) {
  return (
    <div>
      <p>about</p>
      {children}
    </div>  
  )
}

export default template