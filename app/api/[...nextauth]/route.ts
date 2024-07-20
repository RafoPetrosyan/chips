import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { appendFormData, FormDataInput } from '@/utils/helpers'
import axios from 'axios'

const handler = NextAuth({
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
               username: credentials.username,
               // @ts-ignore
               password: credentials.password,
            }
            const body = appendFormData(formDataInput)
            const { data } = await axios.post('/your/endpoint', body)
            if (data.ok && data) {
               return data
            }
            return null
         },
      }),
   ],
})

export { handler as GET, handler as POST }
