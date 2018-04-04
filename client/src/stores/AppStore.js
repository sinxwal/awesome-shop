import { action, observable } from 'mobx'

class AppStore {
  @observable username = 'Default'

  @action('Change UserName')
  changeUser(username) {
    this.username = username
  }
}

export default AppStore
