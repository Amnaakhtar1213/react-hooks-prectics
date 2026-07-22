import React, { useState } from 'react'



const ApiCalling = () => {
const [img, setImg] = useState([])

  async function getData() {
    const response = await fetch("https://picsum.photos/v2/list")
    const data = await response.json
    setImg(data)
  }
  return (
    <div>
       <button onClick={getData}>Get Data</button>
       <div>
        {img.map(function(){
          return <h1>heloool</h1>
        })}
       </div>
    </div>
  )
}

export default ApiCalling
