import React from 'react'

import Border from './Border'
import SingingButton from './SingingButton'

const App = () => (
     
       <Border>
         <SingingButton
         label={'Przycisk 1'}
         sound={'La la la'}
         />
         <SingingButton
         label={'Przycisk 2'}
         sound={'Kotki dwa!'}
         />

       </Border>
      
    )

export default App
