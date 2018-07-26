import React from 'react'

import SingingButton from './SingingButton'
import Paper from 'material-ui/Paper'

const SingingButtonWithBorder = (props) => (
    <Paper>
        <SingingButton
        label={props.label}
        sound={props.sound}
        makeSound={props.makeSound}
         />
    </Paper>
)

export default SingingButtonWithBorder