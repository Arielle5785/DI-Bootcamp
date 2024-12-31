import { useDispatch, useSelector } from "react-redux";
import TaskRemove from "./TaskRemove";
import { toggleTask, editTask } from "./TaskSlice";
import { useState } from "react";

const TasksList = ({ selectedDate }) => {
    const formattedDate = selectedDate.toLocaleDateString("en-IL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    const tasks = useSelector((state) =>
        state.tasksReducer.tasks.filter((task) => task.date === formattedDate)
    );
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState("");
    const [newName, setNewName] = useState("");

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    const handleEdit = (id, currentName) => {
        setEditMode(id);
        setNewName(currentName);
    };

    const saveEdit = (id) => {
        dispatch(editTask({ id, newName }));
        setEditMode(null);
        setNewName("");
    };

    return (
        <>
        <div className="tasks-right">
                <h2>Tasks List for {formattedDate}</h2>
            <div>
            {tasks.length === 0 ? (
                <p>No tasks for this day.</p>
            ) : (
                tasks.map((task) => (
                    <div key={task.id}>
                        {editMode === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                                <button onClick={() => saveEdit(task.id)}>Save</button>
                                <button onClick={() => setEditMode(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span
                                    style={{
                                        textDecoration: task.active ? "none" : "line-through",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => handleToggle(task.id)}
                                >
                                    {task.name}
                                </span>
                                <button onClick={() => handleEdit(task.id, task.name)}>Edit</button>
                                <TaskRemove id={task.id} />
                            </>
                        )}
                        </div>
                    ))
                )}
             </div>
            </div>    
        </>
    );
};

export default TasksList;
