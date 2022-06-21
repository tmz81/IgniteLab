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

interface LessonProps {
  id: string,
  title: string,
}

export function App() {
// Maneira simples para pega os dados da query, sem utilizar o useEffect  
const { data } = useQuery<{lessons: LessonProps[] }>(GET_LESSONS_QUERY)
  
  return (
    <ul>{data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}</ul>
  )
}