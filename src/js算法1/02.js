setTimeout(() => {
  console.log(1)
}, 20);

setTimeout(() => {
  console.log(2)
}, 10);
console.time('111')
let n = 0
while(n <= 999999) {
  n++
}
console.timeEnd('111')
setTimeout(() => {
  console.log(3)
}, 0);
console.log(4)