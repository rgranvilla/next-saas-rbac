'use server'

import { env } from '@saas/env'
import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignInUrl = new URL('login/oauth/authorize', 'https://github.com')

  githubSignInUrl.searchParams.append('client_id', env.GITHUB_OAUTH_CLIENT_ID)
  githubSignInUrl.searchParams.append(
    'redirect_uri',
    env.GITHUB_OAUTH_REDIRECT_URI,
  )
  githubSignInUrl.searchParams.append('scope', 'user')

  redirect(githubSignInUrl.toString())
}
