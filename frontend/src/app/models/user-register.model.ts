// Represents the data required to register a new user.

export interface UserRegister {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
