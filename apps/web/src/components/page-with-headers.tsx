import { Header } from './header'

export function PageWithHeaders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px]">{children}</main>
    </div>
  )
}
