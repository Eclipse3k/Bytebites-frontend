import { RootLayout } from './layouts/RootLayout'
import '@radix-ui/themes/styles.css'
import Home from './components/Home'

function App() {
  return (
    <RootLayout>
      <Home />
    </RootLayout>
  )
}

export default App
