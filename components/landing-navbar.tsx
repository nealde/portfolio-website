"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
// import { useAuth } from "@clerk/nextjs";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Pencil, User, FolderGit2, FileText, HandIcon, TheaterIcon, Home  } from "lucide-react";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });


const sidebarTools = [ 
  {
    label: 'Home',
    icon: Home,
    href: '/',
    color: "text-white"
  },
{
  label: 'About',
  icon: User,
  href: '/about',
  color: "text-white",
},
{
  label: 'Projects',
  icon: FolderGit2,
  href: '/projects',
  color: "text-white",
  // bgColor: "bg-emerald-500/10",
},
{
  label: 'Resume',
  icon: FileText,
  color: "text-white",
  // bgColor: "bg-pink-700/10",
  href: '/resume',
},
{
  label: 'Blog',
  icon: Pencil,
  color: "text-white",
  // bgColor: "bg-pink-700/10",
  href: '/blog',
},
]


export const LandingNavbar = () => {
  // const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="p-20 bg-transparent flex justify-between">
      <Link href="/" className="flex items-center">
        {/* <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div> */}
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          NDE
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
          {sidebarTools.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}

        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link> */}
      </div>
    </nav>
  )
}