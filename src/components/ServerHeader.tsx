import { cookies } from 'next/headers'
import Header from './Header'
 
export default async function ServerHeader() {
  const cookieStore = await cookies()
  const token = cookieStore?.get('access_token')
  // console.log(`🔥server component rendered: 
  //   TokenName:${token?.name}  
  //   TokenValue:${token?.value}`)

  const hasToken = token?.name ? true : false
  
  return <Header isAuthenticated={hasToken} />


  
}