import "./App.css";
import { useState, useEffect } from "react";
import { Task } from "./Task";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        const task = {
            id:
                todoList.length === 0
                    ? 1
                    : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task]);

    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };

    const completeTask = (id) => {
        setTodoList(
            todoList.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: true };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div className="App">
            <div className="add-task">
                <input
                    type="text"
                    onChange={(event) => {
                        setNewTask(event.target.value);
                    }}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((todo) => {
                    return (
                        <Task
                            taskName={todo.taskName}
                            id={todo.id}
                            deleteTask={deleteTask}
                            completed={todo.completed}
                            completeTask={completeTask}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
