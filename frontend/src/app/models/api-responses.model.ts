// Defines the structure of the response received from the login API.
export interface LoginResponse {
  token: string;
  message?: string; // Optional message field
}
