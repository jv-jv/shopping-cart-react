import { createGlobalStyle } from "styled-components"
import { colors } from "./styleVars"

const GlobalStyles = createGlobalStyle`

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${colors.dark}
    }

    #root {
        margin: 0 2rem
    }

`

export default GlobalStyles
