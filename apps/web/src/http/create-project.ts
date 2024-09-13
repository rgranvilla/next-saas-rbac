import { api } from './api-client'

export interface CreateProjectRequest {
  name: string
  description: string | null
  orgSlug: string
}

type CreateProjectResponse = void

export async function createProject({
  name,
  description,
  orgSlug,
}: CreateProjectRequest): Promise<CreateProjectResponse> {
  await api.post(`organizations/${orgSlug}/projects`, {
    json: {
      name,
      description,
    },
  })
}
