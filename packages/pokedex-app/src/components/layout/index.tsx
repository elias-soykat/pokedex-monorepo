import NavbarComponent from '@repo/components/common/navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import ThemeSwitchComponent from '../common/theme-switch'

export default function RootLayoutComponent({ children }: { children: ReactNode }) {
  const router = useRouter()
  return (
    <>
      <NavbarComponent
        logo={
          <Link href="/">
            <Image alt="logo" className="h-8" height={30} src="/logo.svg" width={150} />
          </Link>
        }
        navigate={(path) => {
          router.push(path)
        }}
      >
        <ThemeSwitchComponent />
      </NavbarComponent>
      <main className="w-full flex-1 relative z-20 overflow-auto">
        <Image
          alt="pokemon"
          className="absolute object-cover -top-20 z-0 left-0 w-full h-full opacity-[0.03]"
          height="1080"
          src="https://nextventures.fra1.cdn.digitaloceanspaces.com/web-background-img.webp"
          width="1920"
        />
        <div className="container h-full z-10 overflow-auto mx-auto relative">{children}</div>
      </main>
    </>
  )
}
