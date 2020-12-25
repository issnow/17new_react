import { observable,computed,action } from 'mobx'
class C {
  @observable n = 9
  @action
  add(v) {
    this. n += v
  }
  @action
  minus(v) {
    this.n -= v
  }
}

export default new C()