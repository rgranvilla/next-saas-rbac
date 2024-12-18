import { Role } from '@saas/auth'

import { api } from './api-client'

export interface GetMembershipResponse {
  membership: {
    id: string
    role: Role
    userId: string
    organizationId: string
  }
}

export async function getMembership(slug: string) {
  try {
    const result = await api
      .get(`organizations/${slug}/membership`)
      .json<GetMembershipResponse>()
    return result
  } catch (error) {
    return null
  }
}
