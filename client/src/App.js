import React from 'react'
import {LandingPage} from './pages'
//importing redux
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'

//declaring the store
const store=ConfigureStore()


const App = () => {
  return (
    <Provider store={store}>
      <LandingPage/>
     </Provider>
  )
}

export default App
