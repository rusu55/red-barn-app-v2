import React from 'react'

export const RenderHTML = ({htmlContent}: any) => {
  return (
    <div dangerouslySetInnerHTML={{
        __html: htmlContent, }} />    
  )
}
