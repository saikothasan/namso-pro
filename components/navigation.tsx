'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { CreditCard, Users, CheckCircle, Search, Menu, X, Home, Info, HelpCircle, Key } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'

const routes = [
  {
    href: '/',
    label: 'Home',
    icon: Home
  },
  {
    href: '/credit-card-generator',
    label: 'Card Generator',
    icon: CreditCard
  },
  {
    href: '/user-generator',
    label: 'User Generator',
    icon: Users
  },
  {
    href: '/card-validator',
    label: 'Card Validator',
    icon: CheckCircle
  },
  {
    href: '/bin-checker',
    label: 'BIN Checker',
    icon: Search
  },
  {
    href: '/password-generator',
    label: 'Password Generator',
    icon: Key
  },
  {
    href: '/about',
    label: 'About',
    icon: Info
  },
  {
    href: '/faq',
    label: 'FAQ',
    icon: HelpCircle
  }
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw] sm:w-[350px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route) => {
                  const Icon = route.icon
                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 text-lg font-medium ${
                        pathname === route.href
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {route.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Testing Tools</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <div className="hidden md:flex md:items-center md:gap-6">
              {routes.map((route) => {
                const Icon = route.icon
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`flex items-center gap-2 ${
                      pathname === route.href
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {route.label}
                  </Link>
                )
              })}
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

