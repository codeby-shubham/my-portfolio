import React from 'react'

const AboutCard = (props) => {
  return (
    
        <div className='flex flex-col gap-2 px-2 py-2'>
            <h1 className='font-bold'>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    
  )
}
    
export default AboutCard