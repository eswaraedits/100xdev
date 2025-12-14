import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
console.log(process.env.NEXTAUTH_SECRET)
const handler = NextAuth({
     providers:[
        CredentialsProvider({
    name: "signin with email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "eswar" },
      password: { label: "Password", type: "password" }
    },

    async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;


        //db request to check if user/password is correct
        const user = {
            name:"shyamm asdf",
            email:"eswara@gmail.com",
            username:"shyam", // doesnt show in session nextauth ingores 
            id:"1" //nextauth ignored
        }
        
      if (user) {
        return user
      } else {
        return null
      }
    }
  }),
      GoogleProvider({
    clientId: "helloid",
    clientSecret: "secret"
  }),
  GitHubProvider({
    clientId: "helloid2",
    clientSecret: "secret2"
  })],
  secret:process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
