import React from 'react'

const User = (props) => {
  return (
    <div className="text-xl font-semibold text-red-500">
        {props.element.name}
    </div>
  )
}

export default User