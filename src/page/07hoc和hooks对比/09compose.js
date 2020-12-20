let fn1 = a=>a+1
let fn2 = a=>a+2
let fn3 = a=>a+3

// componse函数 第8行是实现
console.log(fn3(fn2(fn1(1))))

// let compose = (...fns)=>{
//   return fns.reduce((p,n)=>{
//     let fn = (...arr)=>{
//       n(p(...arr))
//     }
//     return fn
//   })
// }

// -->简写成
let compose = (...fns)=>fns.reduce((p,n)=>(...arr)=>n(p(...arr)))

// compose(fn1,fn2,fn3)(params)
console.log(compose(fn1,fn2,fn3)(1))

