import { XCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { shutdownOrganizationAction } from './shutdown-organization-action'

export function ShutdownOrganizationButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-56">
          <XCircle className="mr-2 size-4" />
          Shutdown Organization
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Shutdown</DialogTitle>
        </DialogHeader>
        <DialogDescription className="py-4">
          Are you sure you want to shut down this organization? This action
          cannot be undone.
        </DialogDescription>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <form action={shutdownOrganizationAction}>
            <Button type="submit" variant="destructive">
              Confirm
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
