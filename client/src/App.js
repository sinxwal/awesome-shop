import React from 'react'
import { Provider } from 'mobx-react'

import AppStore from './stores/AppStore'
import Page from './components/Page'

const appStore = new AppStore()

const App = () => (
  <Provider appStore={appStore}>
    <div>
      <h1>Hello world!</h1>
      <Page />
    </div>
  </Provider>
)

export default App
