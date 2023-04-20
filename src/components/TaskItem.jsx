import MyButton from "./UI/button/MyButton";

export default function TaskItem(props) {
    return (
        <div className="flex justify-between items-center h-12 border mb-2 p-2">
            <div>
                <input
                    className="mr-2"
                    onClick={() => props.editcheckbox(props.task)}
                    type="checkbox"
                    id={props.number}
                    name={props.number}
                    defaultChecked={props.task.status}
                ></input>
                <label for={props.number}>{props.task.body}</label>
            </div>
            <MyButton onClick={() => props.remove(props.task)}>delete</MyButton>
        </div>
    );
}
