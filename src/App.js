import { useEffect, useState } from "react";
import InputBar from "./components/InputBar";
import TasksList from "./components/TasksList";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            setTasks(tasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const createTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const removeTask = (task) => {
        setTasks(tasks.filter((t) => t.id !== task.id));
    };

    const editCheckBox = (task) => {
        const foundIndex = tasks.findIndex((t) => t.id === task.id);
        tasks[foundIndex].status = !tasks[foundIndex].status;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-lg items-center flex-row space-x-4 mt-8">
            <h1 className="text-3xl font-medium text-center mb-4">TODO APP</h1>
            <InputBar create={createTask} />
            {tasks.length ? (
                <TasksList
                    editcheckbox={editCheckBox}
                    remove={removeTask}
                    tasks={tasks}
                />
            ) : (
                <h1 className="text-2xl font-medium text-center mb-4">
                    Oops!... there is no task.. yet!
                </h1>
            )}
        </div>
    );
}
