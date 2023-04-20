import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function InputBar({ create }) {
    const [body, setBody] = useState("");

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            body,
            id: Date.now(),
            status: false,
        };
        create(newTask);
        setBody("");
    };

    return (
        <form className="flex justify-between mb-6">
            <MyInput
                placeholder="enter your task.."
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <MyButton onClick={addNewTask}>add</MyButton>
        </form>
    );
}
