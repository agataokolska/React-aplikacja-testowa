import React from 'react'
import HelloWorld from './HelloWorld'
import WhatReactRenders from './WhatReactRenders'
import DisplayName from './DisplayName'
import DisplayArray from './DisplayArray'

const App = () => (
     <div>
       <DisplayArray 
        listOfNames={['Ala','Ela','Izabela']}
       />
      </div>
    )

export default App
