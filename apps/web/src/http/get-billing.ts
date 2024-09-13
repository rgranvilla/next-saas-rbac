import { api } from './api-client'

interface GetBillingRequest {
  org: string
}

export interface GetBillingResponse {
  billing: {
    seats: {
      amount: number
      unit: number
      price: number
    }
    projects: {
      amount: number
      unit: number
      price: number
    }
    total: number
  }
}

export async function getBilling({
  org,
}: GetBillingRequest): Promise<GetBillingResponse> {
  const result = await api
    .get(`organizations/${org}/billing`)
    .json<GetBillingResponse>()

  return result
}
