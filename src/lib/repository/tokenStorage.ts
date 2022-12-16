import WebStorage from '../core/webStorage'

const JWT_TOKEN = 'wanted-jwt' as const

export default class TokenStorage extends WebStorage {
  getToken() {
    return this.get(JWT_TOKEN)
  }

  setToken(token: string) {
    this.set(JWT_TOKEN, token)
  }

  removeToken() {
    this.clear(JWT_TOKEN)
  }
}
