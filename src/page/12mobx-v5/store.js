import { action, observable,computed } from 'mobx'

class Counter {
  @observable n = 0
  @action add(v) {
    this.n+= v
  }
  @action minus(v) {
    this.n-= v
  }
  @computed get add10() {
    return this.n + 10
  }
}

export default new Counter()