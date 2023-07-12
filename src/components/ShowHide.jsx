import React, { useState } from 'react'

export default function ShowHide() {
    const [show, setShow] = useState(true);

    const handleClick = (event) => {
        setShow(!show)
    }
  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide Text" : "Show Text"}</button>
      {show && <h2>Hide Me</h2>}
    </div>
  )
}
