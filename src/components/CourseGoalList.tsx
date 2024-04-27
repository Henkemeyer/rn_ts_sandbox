import CourseGoal from "./CourseGoals";
import { type CourseGoal as GoalCard } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListProps = {
    goals: GoalCard[];
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>
    }

    let warningBox: ReactNode;

    if (goals.length >=4) {
        warningBox = (
            <InfoBox mode="warning" severity="medium">
                You're adding a lot of goals. Don't put too much on your plate!
            </InfoBox>
        )
    }

    return (
        <>
        {warningBox}
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
        </ul></>
      );
}