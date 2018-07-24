import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard'
import PassingParameters from './PassingParameters'
import Sidebar from './Sidebar';

const App = () => (
  <div>
    <Router>
      <div>
        <AppBar
          title={'JFDDL5 APP'}
        />
        <Sidebar/>


        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basiccomponents'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
      </div>
    </Router>
  </div>
)

export default App
