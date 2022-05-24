export function antiShake(
  fn: (...args: any) => any,
  now = false,
  time = 1000,
  callback?: (...arg: any) => any
): (...arg: any) => any {
  //防抖
  let timer: any
  let isNow = false
  const debounce = function (this: any, ...args: any) {
    if (timer) clearTimeout(timer)
    if (!isNow && now) {
      const res: any = fn.apply(this, args)
      if (res) {
        callback && callback(res)
      }
      isNow = true
    } else {
      timer = setTimeout(() => {
        const res = fn.apply(this, args)
        if (res) {
          callback && callback(res)
        }
        isNow = false
      }, time)
    }
  }
  debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isNow = false
  }
  return debounce
}
