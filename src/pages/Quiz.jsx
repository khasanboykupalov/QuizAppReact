//  RRD import
import { useParams } from "react-router-dom"

// Custom Hook 
 import { useFetch } from "../hooks/useFetch"

// React Hook   
import { useEffect } from "react"

// Components  
import Test from "../components/Test"

 function Quiz() {

  const {title} = useParams()

  useEffect( () => {
    document.title = "Quiz" + " " +title
  }, [title] )

  const {data:quizzes, isPending, error} = useFetch(` https://json-api.uz/api/project/quiz-app-react/quizzes/?title=${title}`)
  // useFetch(`http://localhost:3000/quizzes/?title=${title}`)

  return ( 
  <section className="quiz-container container">
    {isPending && <h3>Loading...</h3>}
    {error && <h3>{error}</h3>}

    {quizzes && <Test questions = {quizzes.data[0]} />}

  </section> 
)
}

export default Quiz
