export const Task = (props) => {
    return (
        <div
            className="list-item"
            style={{ color: props.completed ? "green" : "white" }}>
            <h1>{props.taskName}</h1>{" "}
            <button
                onClick={() => {
                    props.completeTask(props.id);
                }}
                className="completed">
                Complete
            </button>
            <button
                className="delete"
                onClick={() => {
                    props.deleteTask(props.id);
                }}>
                Delete
            </button>
        </div>
    );
};
