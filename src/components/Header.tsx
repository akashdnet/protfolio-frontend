"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const Header: React.FC = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "/dashboard", label: "Dashboard" },
  ]

  return (
    <header className="sticky top-0 z w-full bg-transparent backdrop-blur-md shadow-md">
      <div className="container mx-auto max-w-5xl flex items-center justify-center px-6 md:px-8 py-4">
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-3 bg-gradient-to-r from-sky-400/20 via-cyan-400/20 to-emerald-400/20 backdrop-blur-md rounded-lg px-4 py-2 shadow-sm">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="rounded-md px-4 py-2 text-black font-medium hover:bg-white/20"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Button
                asChild
                className="rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold hover:from-teal-600 hover:to-cyan-600"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu" className="text-black">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-white/10">
              <div className="mt-6 flex flex-col space-y-2 bg-gradient-to-r from-sky-400/20 via-cyan-400/20 to-emerald-400/20 backdrop-blur-md rounded-lg p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-4 py-2 text-black transition-colors hover:bg-white/20"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 w-full text-white font-bold hover:from-teal-600 hover:to-cyan-600"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
