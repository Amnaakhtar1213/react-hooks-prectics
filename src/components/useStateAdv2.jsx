import React, { useState } from 'react'

const UseStateAdv2 = () => {
 const [num, setNum] = useState([10, 20 , 30]);

 const clickMe = () => {
  const newNum = [...num]
  newNum.push(40)
  setNum(newNum)
}

 const [name, setName] = useState({user:"victoria", age:20})

const changeMe = () => {
  const newName = {...name}
  newName.user = "jennie"
  setName(newName)
}

const [user, setUser] = useState({user:"rishi", age:20})

const changeName = () => {
setUser(prev => ({...prev, age:50, user:"ulliloo"}))
}



  return (
    <div>
      <div className="flex flex-row gap-10">
         <h1 className="bg-gray-400 p-3 w-30">{num}</h1>
      <button onClick={clickMe} className="bg-teal-900 p-5 mt-5 text-white rounded">Click me !</button>
      </div>
     
  <div  className="flex flex-row gap-10">
    <h2 className="bg-gray-600 mt-5 p-3 w-30">{name.user}</h2>
      <button onClick={changeMe} className="bg-orange-900 mt-5 p-5 text-white rounded">Change me !</button>
  </div>

  <div className="flex flex-row gap-10">
    <h3 className="bg-gray-600 mt-5 p-3 w-30">{user.age}</h3>
      <button onClick={changeName} className="bg-red-900 mt-5 p-5 text-white rounded">Cut me !</button>
  </div>
      

    </div>
  )
}

export default UseStateAdv2
