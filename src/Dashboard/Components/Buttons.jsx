import React from 'react'

function Buttons(props) {
  return (
    <div className='buttons'>
        <button
         id={props.id}
         backgroundColor={props.color}
         onClick={props.handleClick}
         className='button'
         style={{ backgroundColor: props.color }}
        >
          <span>New Quote</span>
        </button>
    </div>
  )
}

export default Buttons