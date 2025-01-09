import React from 'react'

export default function Q5UserCard(Props) {
  return (
    <>
        <h1>UserCard</h1>
        <div style={{width:"300px",background:"green"}}>
            <h2>Username: {Props.username}</h2>
            <h2>Age: {Props.age}</h2>
            <h3>Location:{Props.location}</h3>
        </div>
    </>
  )
}
