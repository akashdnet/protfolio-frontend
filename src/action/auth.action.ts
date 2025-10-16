'use server'

import { cookies } from 'next/headers'
import { parseSetCookieHeader } from './parseSetCookieHeader';

export async function loginAction(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { 
        success: false, 
        error: errorData.message || 'Login failed' 
      }
    }

    const data = await response.json()

   const cookiesStore = await cookies()

   cookiesStore.set('access_token', data.access_token,{
    secure: true,
    httpOnly: true,
    path:"/" 
   })
   cookiesStore.set('refresh_token', data.refresh_token,{
    secure: true,
    httpOnly: true,
    path:"/" 
   })

    
    // const cookieStore = await cookies()    
    // const cookieStore = await cookies()    
    // const setCookieHeader = response.headers.get('set-cookie')
    // if(setCookieHeader){
    //     const tokens = parseSetCookieHeader(setCookieHeader)
    //  tokens.forEach(token => {
    //     cookieStore.set(token.name, token.value, token.options)
    //   })
    // }





    return { success: true }

  } catch (error: any) {
    return { 
      success: false, 
      error: error.message || 'Something went wrong' 
    }
  }
}














export async function logoutAction() {

  const cookieStore = await cookies();

  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');


}