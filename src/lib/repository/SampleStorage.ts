import WebStorage from '../core/webStorage'

const SAMPLE_KEY = 'sample' as const

export default class SampleStorage extends WebStorage {
  getToken() {
    return this.get(SAMPLE_KEY)
  }

  setToken(value: string) {
    this.set(SAMPLE_KEY, value)
  }

  removeToken() {
    this.clear(SAMPLE_KEY)
  }
}
