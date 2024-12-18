import '@/styles/globals.css'

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'
import { PageWithHeaders } from '@/components/page-with-headers'
import { Tabs } from '@/components/tabs'

export const metadata: Metadata = {
  title: 'Saas Next 15rc com RBAC',
}

export default async function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const checkAuth = await isAuthenticated()
  if (!checkAuth) {
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
