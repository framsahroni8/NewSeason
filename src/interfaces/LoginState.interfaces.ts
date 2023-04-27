export interface LoginState {
  isLoggedIn: boolean
  name: string
  token: string | null
  error: string | null
  role: string | null
}
