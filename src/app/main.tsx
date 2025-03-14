import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './router/Router'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={AppRouter} />
    </ChakraProvider>
  </StrictMode>
)
