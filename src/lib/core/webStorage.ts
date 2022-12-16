export type WebStorageType = 'local' | 'session'

interface Storage {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}

export default abstract class WebStorage {
  private storage: Storage

  constructor(type: WebStorageType) {
    switch (type) {
      case 'local':
        this.storage = window.localStorage
        break
      case 'session':
        this.storage = window.sessionStorage
        break
      default:
        throw new Error('storage type is not defined')
    }
  }

  get(key: string) {
    try {
      return this.storage.getItem(key)
    } catch (error) {
      throw new Error('using web storage occur error')
    }
  }

  set(key: string, value: string) {
    try {
      this.storage.setItem(key, value)
    } catch (error) {
      throw new Error('using web storage occur error')
    }
  }

  clear(key: string) {
    this.storage.removeItem(key)
  }
}
