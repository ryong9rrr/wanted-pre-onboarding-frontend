const JWT_TOKEN = 'wanted-jwt' as const

class TokenStorage {
  getToken() {
    return window.localStorage.getItem(JWT_TOKEN)
  }

  setToken(token: string) {
    window.localStorage.setItem(JWT_TOKEN, token)
  }

  removeToken() {
    window.localStorage.removeItem(JWT_TOKEN)
  }
}

const tokenStorage = new TokenStorage()

export default tokenStorage
