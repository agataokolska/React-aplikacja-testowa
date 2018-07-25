import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard'
import PassingParameters from './PassingParameters'
import Sidebar from './Sidebar';
import Counter from './Counter'
import ToDo from './ToDo'

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

        <Route path={'/counter'} component={() => <Counter number={5}/>} />
        <Route path={'/todo'} component={ToDo}/>
      </div>
    </Router>
  </div>
)

export default App
