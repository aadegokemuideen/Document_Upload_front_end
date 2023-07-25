import React from "react"
import DocumentUploadForm from "./components/DocumentUploadForm"
import "./App.css"

/**
 * Challenge: 
 * - Create a Document Upload  component.
 * - Inside the Upload Component, render a styled form
 *   with our 1 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
  return (
    <div className="main_app">
      <DocumentUploadForm />
    </div>
  )
}


