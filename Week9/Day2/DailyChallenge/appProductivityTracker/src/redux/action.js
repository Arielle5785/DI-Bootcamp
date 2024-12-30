import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  UPDATE_TASK_PROGRESS,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
} from './actionType';

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const editTask = (task) => ({ type: EDIT_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const updateTaskProgress = (id, completed) => ({
  type: UPDATE_TASK_PROGRESS,
  payload: { id, completed },
});

export const addCategory = (category) => ({ type: ADD_CATEGORY, payload: category });
export const editCategory = (category) => ({ type: EDIT_CATEGORY, payload: category });
export const deleteCategory = (id) => ({ type: DELETE_CATEGORY, payload: id });
