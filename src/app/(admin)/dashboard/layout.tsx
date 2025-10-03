import type { Metadata } from "next";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Portfolio dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
           <div className=" z-50 h-0">
      <SidebarTrigger size="sm" />
    </div>
          
          {children}
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
