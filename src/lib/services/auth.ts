import Api from '../core/api'
import { AuthServiceInterface } from '../interface'

export default class AuthService extends Api implements AuthServiceInterface {
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
