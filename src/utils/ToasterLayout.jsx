import React from 'react'
import { Toaster } from "react-hot-toast"

export default function ToasterLayout() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={true}
      toastOptions={{
        style: {
          backgroundColor: "var(--color-primary-alt)",  // Uses primary color
          color: "white",  // Ensures readable text
          border: "2px solid var(--color-secondary)", // Uses secondary color
          borderRadius: "8px", // Rounded corners
          padding: "12px 16px", // Equivalent to Tailwind px-4 py-3
          fontSize: "14px", // Text size
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)", // Equivalent to Tailwind shadow-lg
        },
        success: {
          style: {
            backgroundColor: "var(--color-accent)", // Accent color for success
            border: "2px solid var(--color-secondary-alt)", 
          },
        },
        error: {
          style: {
            backgroundColor: "var(--color-secondary-alt)", // Darker secondary color for error
            border: "2px solid var(--color-accent-alt)", 
          },
        },
      }}
    />
  )
}
