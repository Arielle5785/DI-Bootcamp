import { useState } from "react";
import TaskInput from "./TaskInput";
import TasksList from "./TaskList";
import "../App.css"; // Add this new CSS file for styling

const Tasks = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="tasks-container">
            <div className="tasks-left">
                <TaskInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
            <div className="tasks-right">
                <TasksList selectedDate={selectedDate} />
            </div>
        </div>
    );
};

export default Tasks;
