import { PageWithHeaders } from '@/components/page-with-headers'

import { OrganizationForm } from '../org/organization-form'

export default function CreateOrganization() {
  return (
    <PageWithHeaders>
      <h1 className="text-2xl font-bold">Create Organization</h1>

      <OrganizationForm />
    </PageWithHeaders>
  )
}
