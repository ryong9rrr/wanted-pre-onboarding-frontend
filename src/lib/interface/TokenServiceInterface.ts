export default interface TokenServiceInterface {
  getToken: () => string | null
  setToken: (token: string) => void
  removeToken: () => void
}
