import { redirect } from 'next/navigation'

import { ability } from '@/auth/auth'

import { ProjectForm } from './project-form'

export default async function CreateProject() {
  const permissions = await ability()

  console.log('permissions', permissions)

  if (permissions?.cannot('create', 'Project')) {
    redirect('/')
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Create Project</h1>

      <ProjectForm />
    </>
  )
}
