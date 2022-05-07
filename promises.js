const promise1 = async () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve('first promise returns')
    }, 2000);
  })
}

const promise2 = async () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve('second promise returns')
    }, 2000);
  })
}

const asyncFn = async () => {

  let a = promise1()
  let b = promise2()

  let promise1Resolved = await a
  let promise2Resolve = await b

  console.log(promise1Resolved, promise2Resolve)
}

asyncFn()