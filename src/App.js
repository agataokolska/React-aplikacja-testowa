import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard'


const App = () => (
<div>
<Router>
  <div>
    <Route path={'/'} exact component={Dashboard}/>
    <Route path={'/dashboard'} component={Dashboard}/>
    <Route path={'/basiccomponents'} component={BasicComponents}/>
  </div>
</Router>
</div>
)

export default App
