import { Theme } from '@radix-ui/themes'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Theme appearance="light" accentColor="cyan" grayColor="sand">
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </Theme>
  )
}