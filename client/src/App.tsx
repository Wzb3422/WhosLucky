import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Login = lazy(() => import('./pages/login'))
const Pick = lazy(() => import('./pages/pick'))

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/pick'>
            <Pick />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App
