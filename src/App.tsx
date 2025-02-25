import { RootLayout } from './layouts/RootLayout'
import '@radix-ui/themes/styles.css'
import { TestPage } from './playground/components/TestPage'

function App() {
  return (
    <RootLayout>
      <TestPage />
    </RootLayout>
  )
}

export default App
