import React from 'react'
import HelloWorld from './HelloWorld'
import WhatReactRenders from './WhatReactRenders'
import DisplayName from './DisplayName'
import DisplayArray from './DisplayArray'
import Border from './Border'

const namesArray = ['Ala', 'Ela','Zosia']
const App = () => (
     <div>
       <Border>
       <h1>List of names:</h1>
       <DisplayArray
       listOfNames={namesArray}
       />

       </Border>
      </div>
    )

export default App
