import React from 'react'

import Border from './Border'
import SingingButton from './SingingButton'
import SingingButtonWithBorder from './SingingButtonWithBorder';

const App = () => (

  <Border>
    <SingingButtonWithBorder
      label={'Przycisk 1'}
      sound={'La la la'}
      makeSound={() => alert('Im from makeSound')}
    />


  </Border>

)

export default App
