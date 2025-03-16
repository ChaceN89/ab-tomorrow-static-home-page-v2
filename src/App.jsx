import React from "react"
import ColorSlider from "./components/testing/ColorSlider"
import ColorBoxes from "./components/testing/ColorBoxes"
import AnalyticsProvider from "./utils/analytics/AnalyticsProvider"

import DisplayTesting from "./components/testing/DisplayTesting"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./components/routing/AppRoutes"
import { Toaster } from "react-hot-toast"

function App() {

  return(
    <Router>
      <Toaster/>
      <DisplayTesting/>
      <AnalyticsProvider>
        <AppRoutes/>
      </AnalyticsProvider>
    </Router>
  )
}

export default App
