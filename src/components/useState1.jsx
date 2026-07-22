import React, { useState }  from 'react'

const UseState1 = () => {

const [num, setNum] = useState(0);

 function increment() {
  setNum(num+1);
 }

 function decrement() {
  setNum(num-1)
 }
 function reset(){
  setNum(0)
 }
 function jump5(){
  setNum(num+5)
 }

 function jump10(){
  setNum(num+10)
 }

  return (
    <div>
  <h1 className="flex items-center justify-center bg-gray-300 w-8 h-8 p-10 m-20 text-2xl rounded">{num}</h1>
  <button className="bg-red-600 text-white p-2 rounded m-10" onClick={increment}>Increase</button>
  <button className="bg-green-600 text-white p-2 rounded m-10" onClick={decrement}>Decrease</button>
  <button className="bg-pink-600 text-white p-2 rounded m-10" onClick={reset}>Reset</button>
  <button className="bg-amber-600 text-white p-2 rounded m-10" onClick={jump5}>Jump to 5</button>
  <button className="bg-yellow-600 text-white p-2 rounded m-10" onClick={jump10}>Jump to 10</button>
    </div>
  )
}

export default UseState1
