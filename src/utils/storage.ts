class Storage {
  getItem(key: string, flag = true) {
    let value
    if (flag) {
      value = window.sessionStorage.getItem(key)
    } else {
      value = window.localStorage.getItem(key)
    }
    if (value) {
      return JSON.parse(value)
    }
  }
  setItem(key: string, item: any, flag = true) {
    if (flag) {
      window.sessionStorage.setItem(key, JSON.stringify(item))
    } else {
      window.localStorage.setItem(key, JSON.stringify(item))
    }
  }
  removeItem(key: string, flag = true) {
    if (flag) {
      window.sessionStorage.removeItem(key)
    } else {
      window.localStorage.removeItem(key)
    }
  }
  clear() {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
}
export default new Storage()
