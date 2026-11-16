import React from 'react'

export const ContachCard = (props) => {
  return (
    <div>
        <h1 className="font-bold">{props.title}</h1>
        <a href={props.href}>{props.description}</a>

    </div>
  )
}
