import '@/styles/globals.css'

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { PageWithHeaders } from '@/components/page-with-headers'
import { Tabs } from '@/components/tabs'

export const metadata: Metadata = {
  title: 'Create Next App',
}

export default function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
    <PageWithHeaders>
      <>
        <Tabs />
        {children}
      </>
    </PageWithHeaders>
  )
}
