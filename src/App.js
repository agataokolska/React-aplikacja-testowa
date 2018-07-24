import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard'


const App = () => (
<div>
<Router>
    <Route path={'/dashboard'} component={Dashboard}/>
</Router>
</div>
)

export default App
