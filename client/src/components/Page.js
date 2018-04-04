import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('appStore')
@observer
class Page extends React.Component {
  handleClick = () => {
    this.props.appStore.changeUser('tester')
  }

  render() {
    const { appStore } = this.props

    return (
      <div>
        <h3>Page user: {appStore.username}</h3>
        <button onClick={this.handleClick}>Change user</button>
      </div>
    )
  }
}

export default Page
