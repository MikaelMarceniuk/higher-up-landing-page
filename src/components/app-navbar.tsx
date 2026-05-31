'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll.hook'
import { SECTION_IDS } from '@/constants/section-ids.constants'
import { usePathname, useRouter } from 'next/navigation'

export const AppNavbar = () => {
  const { scrollTo } = useSmoothScroll()
  const path = usePathname()
  const router = useRouter()

  const isRootPage = path == '/'

  const renderLogo = () => {
    if (!isRootPage) {
      return (
        <Link href={'/'}>
          <Image
            src="/logo-completo.webp"
            height={40}
            width={150}
            alt="Higher Up Logo"
            onClick={() => scrollTo(SECTION_IDS.hero)}
            className="cursor-pointer"
          />
        </Link>
      )
    }

    return (
      <Image
        src="/logo-completo.webp"
        height={40}
        width={150}
        alt="Higher Up Logo"
        onClick={() => scrollTo(SECTION_IDS.hero)}
        className="cursor-pointer"
      />
    )
  }

  const onSolucaoClickHandler = () => {
    if (!isRootPage) {
      router.push(`/#${SECTION_IDS.solutions}`)
      return
    }

    scrollTo(SECTION_IDS.solutions)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        {renderLogo()}
        <div className="hidden items-center gap-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-sm font-medium text-gray-700 hover:text-purple-900"
                  onClick={onSolucaoClickHandler}
                >
                  SOLUÇÕES DE COMUNICAÇÃO
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex w-48 flex-col p-2">
                    <li>
                      <Link
                        href="/our-solutions/for-companies"
                        className="block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-purple-50 hover:text-purple-900"
                      >
                        Para empresas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-solutions/for-professionals"
                        className="block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-purple-50 hover:text-purple-900"
                      >
                        Para profissionais
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-solutions/for-teachers"
                        className="block rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-purple-50 hover:text-purple-900"
                      >
                        Para professores
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/about-us"
            className="text-sm font-medium text-gray-700 transition hover:text-purple-900"
          >
            QUEM SOMOS
          </Link>

          <Link
            href="/events"
            className="text-sm font-medium text-gray-700 transition hover:text-purple-900"
          >
            EVENTOS
          </Link>

          {/* <Link
            href="#blog"
            className="text-sm font-medium text-gray-700 transition hover:text-purple-900"
          >
            BLOG
          </Link> */}
        </div>
      </div>
    </nav>
  )
}
