import React from 'react'

function Circle({type, r, act}) {

  let length = type === 'HR'? 24: 60

  //array = length => Array.from({length}).map((v, k) => k).map(x=>x+1);

  return (
    <div className="circle">
      {Array.from({length}).map((x , index) => {
        let i = index < 9? `0${index+1}`: `${index+1}`
        return (
          <div key={index}
          className={`item ${act === index+1 ? 'active' : ''} ${act === index+1 ? type.toLowerCase() : ''}`}
          style={
          {
            transformOrigin: `-${r}px 0px`,
            transform: `translateX(${r}px) rotate(${index*(360/length) - (360/length)*(act-1)}deg)`,
          }}>
            {i}{/*{type.toLowerCase()}*/}
          </div>
        )
      })}
    </div>
  )
}

export default Circle
