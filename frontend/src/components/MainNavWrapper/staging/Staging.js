import React from 'react'
import './staging.css'

export default function Staging({
  clientModal
}){
  return (
    <div>
      <div className="addBtn">
        <button onClick={() => (clientModal())}>Add</button>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', margin: '6rem 0'}}>
        <li className="stagingTitle">CLIENT No.</li>
        <li className="stagingTitle">NAME</li>
        <li className="stagingTitle">DEPOSIT</li>
        <li className="stagingTitle">CURRENCY</li>
      </div>
    </div>
  )
}