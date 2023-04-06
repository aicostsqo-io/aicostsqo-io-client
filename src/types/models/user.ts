interface Tokens {
  accessToken: string;
  refreshToken: string;
}
export interface User {
  _id: number;
  full_name: string;
  email: string;
}

export interface UserRegister {
  full_name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
