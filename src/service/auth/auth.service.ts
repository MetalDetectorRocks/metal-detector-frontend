import axios from "axios";

class AuthService {

  private readonly LOGIN_ENDPOINT = "http://localhost:8080/rest/v1/login";

  public async login(username: string, password: string): Promise<any> {
    return await axios
      .post(this.LOGIN_ENDPOINT, {
        email: username,
        password: password
      })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        throw error;
      })
  }
}

export default new AuthService()
