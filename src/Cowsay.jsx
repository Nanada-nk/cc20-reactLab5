import React from 'react'
import * as cowsay from "cowsay"

function Cowsay(props) {
  const {sayObj, scale, text} = props
  // console.log(cowsay.say(sayObj))
  // console.log(typeof cowsay.say(sayObj))
  return(
    <div className="cowsay"
      style={{ transform:`scale(${scale})`,
      transformOrigin: 'top left',
      transition: '0.5s'
      }}
    >
      <pre className="text-blue-500">{cowsay.say(sayObj)}</pre>
    </div>
  )
}

export default Cowsay