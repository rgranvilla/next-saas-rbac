'use server'

import { redirect } from 'next/navigation'

import { getCurrentOrg } from '@/auth/auth'
import { shutdownOrganization } from '@/http/shutdown-organization'

export async function shutdownOrganizationAction() {
  const currentOrg = await getCurrentOrg()

  await shutdownOrganization({ org: currentOrg! })

  redirect('/')
}
