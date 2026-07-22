import React from 'react'

const LocalStorage = () => {


  // const user = {name:"anna", age:20, city:"korea"}

const user = JSON.parse(localStorage.getItem("user"))
console.log(user)


  return (
    <div>
      <h1>APPP</h1>
    </div>
  )
}

export default LocalStorage
