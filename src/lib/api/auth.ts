import Api from '../core/api'

class AuthApi extends Api {
  async signup(requestBody: {
    email: string
    password: string
  }): Promise<{ access_token: string }> {
    const response = await this.baseInstance.post('/auth/signup', requestBody)
    return response.data
  }

  async login(requestBody: { email: string; password: string }): Promise<{ access_token: string }> {
    const response = await this.baseInstance.post('/auth/signin', requestBody)
    return response.data
  }
}

const authApi = new AuthApi()

export default authApi
