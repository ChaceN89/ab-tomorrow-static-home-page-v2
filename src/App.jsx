import React from "react"
import ColorSlider from "./components/testing/ColorSlider"
import ColorBoxes from "./components/testing/ColorBoxes"
import AnalyticsProvider from "./utils/analytics/AnalyticsProvider"

import DisplayTesting from "./components/testing/DisplayTesting"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./components/routing/AppRoutes"

function App() {

  return(
    <Router>
      <DisplayTesting/>
      <AnalyticsProvider>
        <AppRoutes />
      </AnalyticsProvider>
    </Router>
  )
}

export default App
