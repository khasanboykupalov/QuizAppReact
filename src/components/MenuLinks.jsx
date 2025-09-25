// Custom Hooks
import { Link } from "react-router-dom"
import {useFetch} from "../hooks/useFetch"

function MenuLinks() {

      const { data:quizzes, isPending, error } = useFetch('https://json-api.uz/api/project/quiz-app-react/quizzes')
  return (
    <div>
      {isPending && <p>Loading...</p>} 
      {error && <p>{error}</p>}

      <div className="menu-list">
          { quizzes && quizzes.data.map((item) =>{

            return (
              <Link to={`/quiz/${item.title}`} key={item.title} className="menu-item header-logo">
                <figure style={{backgroundColor: item.color}}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            )
          })}
      </div>

    </div>
  )
}

export default MenuLinks
