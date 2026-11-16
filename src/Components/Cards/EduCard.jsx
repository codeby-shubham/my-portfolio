import React from 'react'

const EduCard = (props) => {
  return (
    <div className="flex flex-col gap-2 px-2 py-2">
        <h1>
            {props.course}
        </h1>
        <p>
            {props.institution}
        </p>
        <p>
            {props.year}
        </p>

    </div>
  )
}

export default EduCard