import { useDispatch, useSelector } from "react-redux"
import TaskRemove from "./TaskRemove"
import { toggleTask } from "./toDoSlice"


const TasksList = () => {
    const tasks = useSelector(state => state.tasksReducer.tasks)
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };
    return (
        <>
        
            <h2>Tasks List</h2>
            <p>Click the task to mark it complete.   
            Click the cross to delete it. </p>
            {tasks.map(item => {
                return(
                <div key={item.id}>
                    <span
                        style={{
                            textDecoration: item.active ? "none" : "line-through",
                            cursor: "pointer"
                        }}
                        onClick={() => handleToggle(item.id)}>
                            {item.name} ({item.date})
                    </span>
                    
                    <TaskRemove id={item.id} />
                </div>)
            })}
         </>
    );
};

export default TasksList