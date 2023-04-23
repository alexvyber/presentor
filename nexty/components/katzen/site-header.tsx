import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/katzen/ui/button'
import { CommandMenu } from '@/components/katzen/command-menu'
import { Icons } from '@/components/katzen/icons'
import { MainNav } from '@/components/katzen/main-nav'
import { MobileNav } from '@/components/katzen/mobile-nav'
import { ModeToggle } from '@/components/katzen/mode-toggle'
import { Container } from '../Container'

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <Container>
        <div className="max-w-7xl mx-auto flex h-14 items-center">
          <MainNav />
          {/* <MobileNav /> */}
          <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">{/* <CommandMenu /> */}</div>
            <nav className="flex items-center space-x-1">
              {/* <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0'
                )}>
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0'
                )}>
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
              {/* <ModeToggle /> */}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  )
}
