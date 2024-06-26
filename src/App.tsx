import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";
import goalsImg from './assets/react.svg'
import { useState } from "react";

export type CourseGoal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal( title:string, description:string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title:title,
        description:description
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{src:goalsImg, alt:"A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}