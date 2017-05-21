import { Action } from './reducer';
import * as store from '../store';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Action creators

export interface AddTaskAction extends Action {
    todoItem: store.TodoItem;
}

export function addTaskAction(task: store.TodoItem): AddTaskAction {
    return {
        type: ADD_TASK,
        todoItem: task
    };
}

export interface RemoveTaskAction extends Action {
    todoItemID: string;
}

export function removeTaskAction(taskID: string): RemoveTaskAction {
    return {
        type: REMOVE_TASK,
        todoItemID: taskID
    };
}

export interface UpdateTaskAction extends Action {
    todoItem: store.TodoItem;
}

export function updateTaskAction(task: store.TodoItem): UpdateTaskAction {
    return {
        type: UPDATE_TASK,
        todoItem: task
    };
}

// Reducer

export function reducer(state: store.StoreState = store.getInitialState(), action: Action): store.StoreState {
    switch (action.type) {
        case ADD_TASK:
            return reduceAddTask(state, action as AddTaskAction);
        default:
            return state;
    }
}

function reduceAddTask(state: store.StoreState, action: AddTaskAction): store.StoreState {

    const newTodoItem = Object.assign({}, action.todoItem, {
        id: newUUID()
    });
    const newTodoItems = new Map<string, store.TodoItem>(state.todoItems);
    newTodoItems.set(newTodoItem.id, newTodoItem);

    const newProjects: Map<string, store.Project> = new Map<string, store.Project>(state.projects);
    let project: store.Project = newProjects.get(newTodoItem.projectID) as store.Project;
    let newTaskIDs: string[] = [...project.todoItemIDs, newTodoItem.id];
    let newProject: store.Project = Object.assign({}, project, { todoItemIDs: newTaskIDs });
    newProjects[project.id] = newProject;

    return Object.assign({}, state, {
        projects: newProjects,
        todoItems: newTodoItems
    });
}

var todoIDs: number = 0;

function newUUID() {
    todoIDs++;
    return todoIDs.toString();
}
