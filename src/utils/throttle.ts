export function throttle(
  func: (...arg: any) => any,
  wait = 1000,
  options = { begin: true, end: false }
) {
  let timeout: any,
    previous = 0

  return function (this: any, ...args: any) {
    const now = +new Date()
    const remain = wait - (now - previous)

    if (remain < 0) {
      if (previous === 0 && !options.begin) {
        previous = now
        return
      }

      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      previous = now
      func.apply(this, args)
    } else if (!timeout && options.end) {
      timeout = setTimeout(() => {
        func.apply(this, args)
        timeout = null
      }, wait)
    }
  }
}
