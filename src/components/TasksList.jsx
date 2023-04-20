import TaskItem from "./TaskItem";

export default function TasksList({ tasks, remove, editcheckbox }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          editcheckbox={editcheckbox}
          remove={remove}
          number={index + 1}
          task={task}
          key={task.id}
        />
      ))}
    </div>
  );
}
