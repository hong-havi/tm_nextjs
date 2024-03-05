// Import necessary dependencies and styles
'use client'

import { Providers } from './store/provider';
import PageComp from './page.components'

// Define the Home component
export default function Home(){

  // JSX for the main component
  return (
    <main>
        <Providers>
            <PageComp />
        </Providers>
    </main>
  )
}