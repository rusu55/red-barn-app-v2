import React from 'react'

export const Widget = ({children}: any) => {
  return (
    <div className=' bg-grey p-8 mb-7 overflow-x-hidden'>
      {children}
    </div>
  )
}

