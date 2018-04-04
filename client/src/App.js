import React from 'react'
import { Provider } from 'mobx-react'
import CSSModules from 'react-css-modules'

import AppStore from './stores/AppStore'
import Page from './components/Page'
import styles from './App.scss'

const appStore = new AppStore()

const App = () => (
  <Provider appStore={appStore}>
    <div styleName="root">
      <h2 styleName="title">Hello world!</h2>
      <Page />
    </div>
  </Provider>
)

export default CSSModules(App, styles)
