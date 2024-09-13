import '@/styles/globals.css'

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export const metadata: Metadata = {
  title: 'Saas Next 15rc com RBAC',
}

export default function AppLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
    <>
      {children}
      {sheet}
    </>
  )
}
