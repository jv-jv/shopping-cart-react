const key = "1wpjeNKq"
const url = "https://www.rijksmuseum.nl/api/en/collection?key="
const startingPage = Math.floor(Math.random() * 10)
// const startingPage = 1
const numResults = 10
// const type = "painting"

const rijksQuery = `
${url}
${key}
&imgonly=True
&p=${startingPage} 
&ps=${numResults}
&culture=en
`
// &type=${type}

export { rijksQuery }
