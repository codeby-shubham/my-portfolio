import React from 'react'

 const Ik = (props) => {
  return (
    <div className="border-2 border-black rounded-lg p-4">
        <h1>{props.icon}</h1>
        <h2>{props.skill}</h2>
    </div>
  )
}

export default Ik 
