import React from 'react'
import { Provider } from 'mobx-react'

import AppStore from './stores/AppStore'
import Page from './components/Page'
import styles from './App.scss'

const appStore = new AppStore()

const App = () => (
  <Provider appStore={appStore}>
    <div className={styles.root}>
      <h2 className={styles.title}>Hello world!</h2>
      <Page />
    </div>
  </Provider>
)

export default App
