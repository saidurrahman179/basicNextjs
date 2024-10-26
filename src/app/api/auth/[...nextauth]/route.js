import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  session:{
    strategy:"jwt"
  },
  providers:[
    CredentialsProvider({
      credentials:{
        email:{
          label:"Email",
          type:"text",
          required:true,
          placeholder:"Enter your Email",
          name:"emal",
        },
        password:{
          label:"Password",
          type:"password",
          name:"password",
          required:true,
        },
        
      },
      // async authorize(credentials){
      //   // if(!credentials){
      //   //   return null;
      //   // }
      //   return true;
      // },
    }),
  ],
});

export { handler as GET, handler as POST }