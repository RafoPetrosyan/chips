export interface User {
   id: number
   auth_key: string
   email: string
   first_name: string
   last_name: string
   login_url: string
   role: string
}

export interface SignInPayload {
   email: string
   password: string
}

export interface UserState {
   currentUser: User | null
   loading: boolean
}
