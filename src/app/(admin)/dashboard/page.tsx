import { redirect } from "next/navigation"



export default function page() {
  redirect("/dashboard/projects")
  return (
    <div className="h-screen w-full bg-amber-50">
    
    </div>
  )
}
