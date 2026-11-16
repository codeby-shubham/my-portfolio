import React from 'react'

export const MovieCard = (props) => {
  return (
    <div className="border-2 border-black rounded-lg p-4">
      <h1>{props.icon}</h1>
      <h2 className="font-bold">{props.title}</h2>
      <p>{props.description}</p>
      {/* //<span className="text-blue-500 hover:underline">{props.link}</span> */}
      {props.link && (
        <a href={props.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Link
        </a>
      )}
    </div>
  )
}
