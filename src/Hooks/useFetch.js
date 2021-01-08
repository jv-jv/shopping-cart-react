import { useEffect, useState } from "react"

export default function useFetch(url, startOption, initialValue = []) {
  const [apiData, setApiData] = useState(initialValue)
  const [option, setOption] = useState((startOption = "painting"))

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}&type=${option}`)
      const data = await response.json()
      setApiData(data)
    }
    fetchData()
  }, [url, option])

  return [apiData, setOption]
}
