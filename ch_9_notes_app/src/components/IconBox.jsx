import React from 'react'

const IconBox = ({icon}) => {
  return (
    <div className="icon-box h-10 w-10 p-1 bg-[#eee] rounded-lg">
        <img src={icon} alt="social-icon" />
    </div>
  )
}

export default IconBox