import CourseGoal from "./CourseGoals";
import { type CourseGoal as GoalCard } from "../App";

type CourseGoalListProps = {
    goals: GoalCard[];
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                <CourseGoal 
                    title={goal.title} 
                    onDeleteGoal={onDeleteGoal}
                    goalId={goal.id}>
                    <p>{goal.description}</p>
                </CourseGoal>
                </li>
            ))}
        </ul>
      );
}