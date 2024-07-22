import React from 'react'
import './styles/style.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { PageLayout } from './components/PageLayout'
import { AppRouting } from './routing/AppRouting'

 export const App = () => {  

  return (
    <Router>
      <PageLayout>  {/*footer and header and scrollToTop*/}
        <AppRouting/> {/* routing */}
      </PageLayout>
    </Router>
  
  )
}

