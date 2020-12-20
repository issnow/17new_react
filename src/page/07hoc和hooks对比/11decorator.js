function age() {
  this.age = 12
}
@age
class F {
  constructor(name) {
    this.name = name
  }
}

const f = new F('哦吼')

console.log(f)