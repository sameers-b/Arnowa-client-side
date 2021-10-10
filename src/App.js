import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import Dashboard from './pages/Dashboard'


const App = () => {

  return (
    <>
     <Router>
     <Header />
       <Switch>
         <Route path="/" exact component={SignIn}/>
         <Route path="/register" exact component={SignUp}/>
         <Route path="/dashboard" exact component={Dashboard}/>
       </Switch>
     </Router>
    </>
  )
}

export default App
