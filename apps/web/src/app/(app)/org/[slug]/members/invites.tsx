import { ability, getCurrentOrg } from '@/auth/auth'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { getInvites } from '@/http/get-invites'

import { CreateInviteForm } from './create-invite-form'
import { RevokeInvite } from './revoke-invite-button'

export async function Invites() {
  const currentOrg = getCurrentOrg()
  const permissions = await ability()

  const { invites } = await getInvites(currentOrg!)

  const canCreateInvites = permissions?.can('create', 'Invite')
  const canRevokeInvites = permissions?.can('delete', 'Invite')

  return (
    <div className="space-y-4">
      {canCreateInvites && (
        <div className="space-y-2">
          <Card>
            <CardHeader>Invite member</CardHeader>

            <CardContent>
              <CreateInviteForm />
            </CardContent>
          </Card>
        </div>
      )}

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Invites</h2>
        <div className="rounded border">
          <Table>
            <TableBody>
              {invites.map((invite) => (
                <TableRow key={invite.id}>
                  <TableCell className="py-2.5">
                    <span className="text-muted-foreground">
                      {invite.email}
                    </span>
                  </TableCell>
                  <TableCell className="py-2.5 font-medium">
                    {invite.role}
                  </TableCell>
                  <TableCell className="py-2.5">
                    <div className="flex justify-end">
                      {canRevokeInvites && (
                        <RevokeInvite inviteId={invite.id} />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              {invites.length === 0 && (
                <TableRow>
                  <TableCell className="py-4 text-center text-muted-foreground">
                    No invites found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
