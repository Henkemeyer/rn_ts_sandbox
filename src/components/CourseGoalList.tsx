import CourseGoal from "./CourseGoals";
import { type CourseGoal as GoalCard } from "../App";

type CourseGoalListProps = {
    goals: GoalCard[];
}

export default function CourseGoalList({ goals }: CourseGoalListProps) {
    return (
        goals.map((goal) => (
        <li>
          <CourseGoal title={goal.title}>
            {goal.description}
          </CourseGoal>
        </li>
      ))
)}