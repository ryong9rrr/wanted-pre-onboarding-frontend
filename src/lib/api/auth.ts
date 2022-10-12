import Api from '../core/api'

class AuthApi extends Api {
  async signup(requestBody: { email: string; password: string }): Promise<{ access_token: string }> {
    return await this.baseInstance.post('/auth/signup', requestBody)
  }

  async login(requestBody: { email: string; password: string }): Promise<{ access_token: string }> {
    return await this.baseInstance.post('/auth/signin', requestBody)
  }
}

const authApi = new AuthApi()

export default authApi
