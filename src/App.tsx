import { gql, useQuery } from "@apollo/client"

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
// Maneira simples para pega os dados da query, sem utilizar o useEffect  
const { data } = useQuery(GET_LESSONS_QUERY)
console.log(data);
  
  return (
    <div>
      <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
    </div>
  )
}