import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

// define quais items serão puxados, qgl é para highlight
const GET_LESSONS_QUERY = gql` 
  query{
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`

export function App() {
// Maneira tradicional para pega os dados da query  
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response.data);
    })
  }, [])
  
  return (
    <div>
      <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
    </div>
  )
}