import React from 'react'
import HelloWorld from './HelloWorld'
import DisplayArray from './DisplayArray'
import DisplayName from './DisplayName'
import WhatReactRenders from './WhatReactRenders'
import SingingButtonWithBorder from './SingingButtonWithBorder'

const BasicComponents = (props) => (
    <div>
        <h1>Basic Components</h1>
        <HelloWorld/>
        <hr/>
        <DisplayArray
        listOfNames={['Ala','Ela','Zosia']}
         />
         <hr />
        <DisplayName
        firstName={'Ala'}
        lastName={'Kowalska'}/>
        <hr/>
        <WhatReactRenders/>
        <hr/>
        <SingingButtonWithBorder
            label={'Sound'}
            sound={'lalala'}
        />
    </div>

)

export default BasicComponents