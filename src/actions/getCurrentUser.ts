
import { getServerSession } from 'next-auth/next'

import { handler } from "@/app/api/auth/[...nextauth]/route";

// Define a type for the session object
interface SessionType {
    user?: {
      email?: string;
      // Add other user properties here if needed
    };
    // Add other session properties here if needed
  }
  
  // Define a type for the user object
  interface UserType {
    email: string;
    // Add other user properties here if needed
  }



export async function getSession(): Promise<SessionType | null>{
    return await getServerSession(handler);
}


export default async function getCurrentUser(){
    try {
        const session = await getSession();
        // console.log("session --->",session);
        
        if(!session?.user?.email){
            return null;
        } 
        
        const data = session.user;

        return data;

    } catch (error: any) {
        return null;
    }
}

