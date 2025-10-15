"use client"
import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"
import { logoutAction } from "@/action/auth.action"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Projects",
      url: "/dashboard/projects",
    },
    {
      title: "Blogs",
      url: "/dashboard/blogs",
    },
    // {
    //   title: "Login",
    //   url: "/login",
    // },
    
    

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();


  const logout = async () => {
    const toastId = toast.loading("Logging out...");

    try {
      const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
    const data = await res.json()
    
    if (data.success) {
      await logoutAction()
      toast.success("Logged out successfully!", { id: toastId });   
      router.refresh();   
      router.push("/"); 
    }else{
      toast.error(`Error logging out: ${data.message}`, { id: toastId });
    }
      
    } catch (error:any) {
      console.log(error)
      toast.error(`Error logging out: ${error.message}`, { id: toastId });

    }

  }


  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Go to home</span>
                  <span className=""></span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1 mx-auto">
          <Button variant="destructive" onClick={logout} >Logout</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
