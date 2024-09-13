import type { Role } from '@saas/auth'

import { api } from './api-client'

export interface CreateInviteRequest {
  email: string
  role: Role
  orgSlug: string
}

type CreateInviteResponse = void

export async function createInvite({
  email,
  role,
  orgSlug,
}: CreateInviteRequest): Promise<CreateInviteResponse> {
  await api.post(`organizations/${orgSlug}/invites`, {
    json: {
      email,
      role,
    },
  })
}
