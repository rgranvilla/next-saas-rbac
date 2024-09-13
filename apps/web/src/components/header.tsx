import { Tally1 } from 'lucide-react'
import Link from 'next/link'

import { ability } from '@/auth/auth'

import { LogoDevtrails } from './logo/devtrails'
import { OrganizationSwitcher } from './organization-switcher'
import { PendingInvites } from './pedding-invites'
import { ProfileButton } from './profile-button'
import { ProjectSwitcher } from './project-switcher'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permissions = await ability()

  return (
    <header>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <LogoDevtrails className="w-32" />
          </Link>

          <Tally1 className="ml-4 size-5 text-border" />
          <OrganizationSwitcher />

          {permissions?.can('get', 'Project') && (
            <>
              <Tally1 className="size-5 text-border" />
              <ProjectSwitcher />
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <PendingInvites />
          <ThemeSwitcher />
          <Separator orientation="vertical" className="h-5" />
          <ProfileButton />
        </div>
      </div>
    </header>
  )
}
