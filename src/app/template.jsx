import Header from '@/components/Header'
import React from 'react'

export default function template({children}) {
    const  date = new Date();
    console.log('1')
  return (
    <div>
        <p>Today date  { date.getDate() } {date.getMonth()+1} </p>
        {children}
    </div>
  )
}
