import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { appendFormData, FormDataInput } from '@/utils/helpers'
import axios from 'axios'

const authOptions: NextAuthOptions = {
   providers: [
      GithubProvider({
         clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
         clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
      }),
      CredentialsProvider({
         name: 'Credentials',
         credentials: {
            username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
            password: { label: 'Password', type: 'password' },
         },
         async authorize(credentials) {
            const formDataInput: FormDataInput = {
               // @ts-ignore
               email: credentials.email,
               // @ts-ignore
               password: credentials.password,
            }
            const body = appendFormData(formDataInput)
            try {
               const { data } = await axios.post(
                  `${process.env.NEXT_PUBLIC_API_BASE_URL}/login`,
                  body,
                  {
                     headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                     },
                  },
               )
               if (data.success && data) {
                  return data.data
               }
            } catch (e: any) {
               throw new Error(JSON.stringify(e.response?.data.errors))
            }
         },
      }),
   ],
   pages: {
      signIn: '/auth/sign-in',
   },
   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            return { ...token, ...user }
         }
         return token
      },
      async session({ session, token }) {
         session.user = token
         return session
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
   session: {
      strategy: 'jwt',
   },
}

export default authOptions
