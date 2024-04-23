"use client";

import NavbarComponent from "@repo/components/components/common/layout/navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export default function RootLayoutComponent({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex flex-col">
      <NavbarComponent
        logo={
          <Link href="/" className="cursor-pointer">
            <Image
              alt="logo"
              className="h-8 cursor-pointer"
              height={30}
              src="/logo.svg"
              width={150}
            />
          </Link>
        }
        navigate={(path) => {
          router.push(path);
        }}
      />
      <main className="flex flex-col items-center w-full flex-1 justify-between">
        {children}
      </main>
    </div>
  );
}
