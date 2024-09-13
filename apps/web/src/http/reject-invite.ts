import { api } from './api-client'

export async function rejectInvite(inviteId: string) {
  await api.delete(`invites/${inviteId}/reject`)
}
