import React from 'react'

export const MovieCard = (props) => {
  return (
    <div className="border-2 border-black rounded-lg p-4">
      <h1>{props.icon}</h1>
      <h2 className="font-bold">{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
