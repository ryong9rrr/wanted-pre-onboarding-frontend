type RequestBody = {
  email: string
  password: string
}

export default interface AuthServiceInterface {
  signup: (params: RequestBody) => Promise<{ access_token: string }>
  login: (params: RequestBody) => Promise<{ access_token: string }>
}
