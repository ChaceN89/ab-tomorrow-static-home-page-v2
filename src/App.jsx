/**
 * @file App.jsx
 * @module App
 * @desc Main Entry Point of the Application.
 * - This file wraps the entire application in a Router, provides a global Toaster for notifications, and sets up the application routing with a loading splash screen.
 * - It uses `Suspense` for lazy-loading the `AppRoutes` and shows a fallback splash screen while the application is loading.
 * - An `ErrorBoundary` is used to catch and display errors globally, showing a custom error message using the `SplashScreen` component.
 * - The `AppRoutes` component is memoized to prevent unnecessary re-renders, improving performance.
 *
 *  @features
 * - **Error Handling**: The `ErrorBoundary` component captures any errors and renders a fallback error screen using `SplashScreen`.
 * - **Lazy Loading**: `AppRoutes` is lazy-loaded and wrapped in `Suspense` for better performance and to show a loading screen during initial load.
 * - **Memoization**: The `AppRoutes` component is memoized to avoid unnecessary re-renders, optimizing the app's performance.
 * - **Routing Setup**: Utilizes `react-router-dom` for routing and defines the core structure for page transitions.
 * - **Custom Splash Screen**: A consistent, reusable loading and error screen through the `SplashScreen` component for all future applications.
 * - **Global Notifications**: The `Toaster` component is used for global notifications with the `react-hot-toast` library.
 *
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 * @see {@link https://reactjs.org/docs/error-boundaries.html | React Error Boundaries}
 * @see {@link https://reactjs.org/docs/react-api.html#reactmemo | React Memo}
 * @see {@link https://reactjs.org/docs/react-api.html#reactlazy | React Lazy}
 * @see {@link https://reactjs.org/docs/react-api.html#reactsuspense | React Suspense}
 * @see {@link https://reactrouter.com/web/api/Routes | React Router Routes}
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 *
 */

import React, { Suspense, lazy, memo, Component, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from "react-hot-toast"

// Custom Components
import AnalyticsProvider from "./utils/analytics/AnalyticsProvider"
import DisplayTesting from "./components/testing/DisplayTesting"
import SplashScreen from './components/ui-utils/SplashScreen';
import ErrorBoundary from './components/ui-utils/ErrorBoundary';

// the AppRoutes component is wrapped in a memo to prevent re-renders - and lazy loaded to improve performance and show a splash screen while loading
const AppRoutes = memo(lazy(() => import("./components/routing/AppRoutes"))); // Memoized Home component


export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SplashScreen />}>
        <Router>
          <Toaster />
          <DisplayTesting />
          <AnalyticsProvider>
            <AppRoutes />
          </AnalyticsProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}