import { redirect } from 'next/navigation'

import { ability } from '@/auth/auth'

import { Invites } from './invites'
import { MemberList } from './member-list'

export default async function MembersPage() {
  const permissions = await ability()

  if (permissions?.cannot('create', 'Project')) {
    redirect('/')
  }

  const canGetMembers = permissions?.can('get', 'User')
  const canGetInviteMembers = permissions?.can('get', 'Invite')

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Members</h1>

      {canGetInviteMembers && <Invites />}
      {canGetMembers && <MemberList />}
    </div>
  )
}
