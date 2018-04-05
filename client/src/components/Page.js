import React from 'react'
import { observer, inject } from 'mobx-react'
import { sample } from 'lodash'

const userNames = ['Vasia', 'Petia', 'Ivan']

@inject('appStore')
@observer
class Page extends React.Component {
  handleClick = () => {
    this.props.appStore.changeUser(sample(userNames))
  }

  render() {
    const { appStore } = this.props

    return (
      <div>
        <h3>Page userName: {appStore.username}</h3>
        <button onClick={this.handleClick}>Change user</button>
      </div>
    )
  }
}

export default Page
