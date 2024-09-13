import { api } from './api-client'

export interface GetOrganizationResponse {
  organization: {
    id: string
    slug: string
    name: string
    domain: string
    shouldAttachUsersByDomain: boolean
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    ownerId: string
  }
}

export async function getOrganization(
  org: string,
): Promise<GetOrganizationResponse> {
  const result = await api
    .get(`organizations/${org}`)
    .json<GetOrganizationResponse>()

  return result
}
