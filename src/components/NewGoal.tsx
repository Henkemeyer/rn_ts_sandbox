import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (title: string, description: string) => void
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const enteredGoalTitle = title.current!.value;
        const enteredGoalDescription = description.current!.value;
        // new FormData(event.currentTarget)
        event.currentTarget.reset();

        onAddGoal(enteredGoalTitle, enteredGoalDescription)
    }

    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" ref={title}/>
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={description}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}