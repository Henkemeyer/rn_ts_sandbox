import CourseGoal from "./components/CourseGoals.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/react.svg'
import { useState } from "react";

type CourseGoal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!"
      }
      return [...prevGoals, newGoal]
    })
  }
  return (
    <main>
      <Header image={{src:goalsImg, alt:"A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal title={goal.title}>
              {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  )
}