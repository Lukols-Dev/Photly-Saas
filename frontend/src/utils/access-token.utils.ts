export class AccessToken {
  static get accessToken() {
    return (
      localStorage.getItem("user_token") || sessionStorage.getItem("user_token")
    );
  }

  static setAccessToken(token: string, presistent: boolean) {
    if (presistent) {
      localStorage.setItem("user_token", token);
    } else {
      sessionStorage.setItem("user_token", token);
    }
  }

  static removeTokens() {
    localStorage.removeItem("user_token");
    sessionStorage.removeItem("user_token");
  }
}
