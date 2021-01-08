import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "./Context"
import App from "./App"
import GlobalStyles from "./GlobalStyles"

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </ContextProvider>,
  document.querySelector("#root")
)
