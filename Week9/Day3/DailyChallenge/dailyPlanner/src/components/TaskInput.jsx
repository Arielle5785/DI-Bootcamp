import { useDispatch } from "react-redux";
import { addTasks } from "./TaskSlice";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TaskInput = ({ selectedDate, setSelectedDate }) => {
    const [taskName, setTaskName] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskName.trim() === "" || !selectedDate) return;
        const formattedDate =selectedDate.toLocaleDateString("en-IL"); // Format as "YYYY-MM-DD"
        dispatch(addTasks({ name: taskName, date: formattedDate }));
        setTaskName(""); // Clear the input field
    };

    return (
        <div>
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
            />
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
