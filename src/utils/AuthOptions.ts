
import { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'


 const authOptions: NextAuthOptions = {
    providers : [
                GithubProvider({
                    clientId : process.env.GITHUB_ID as string,
                    clientSecret : process.env.GITHUB_SECRET as string,
                }),
                GoogleProvider({
                    clientId: process.env.GOOGLE_ID as string,
                    clientSecret : process.env.GOOGLE_SECRET as string,
                })
            ],
            pages : {
                signIn : "/login"
            },
            debug : process.env.NODE_ENV === "development",
            session : {
                strategy : "jwt",
                maxAge : 2 * 60 * 60,   // log out in 2 hours
            },
            // callbacks: {
            //     async jwt({ token, account , user }) {
            //         // Persist the OAuth access_token and or the user id to the token right after signin
            //         if (account) {
            //           token.accessToken = account.access_token
            //           token.id = user.id
            //         }
            //         return token
            //       },
            //   },
            secret : process.env.NEXTAUTH_SECRET,
  }



export { authOptions };