import React from 'react'

const string = 'ala ma kota'
const number = 123
const bool = true
const undefinedVar = undefined
const nullVal = null
const emptyString = []
const stringVal = ['Ala', 'Ela','Zosia']

const WhatReactRenders = () => (
    <div> 
    {string} 
    <br />
     {number}
     <br />
     {bool}
     <br />
     {undefinedVar}
     <br />
     {nullVal}
     <br />
     {emptyString}
     <br />
    {stringVal}
    <br />
    {stringVal[0]}{stringVal[1]}{stringVal[2]}
    <br />
    <ul>
        {
            stringVal.map((singleEl,index) => <li key={index}> {singleEl}</li>)
        }
    </ul>
     </div>
)

export default WhatReactRenders