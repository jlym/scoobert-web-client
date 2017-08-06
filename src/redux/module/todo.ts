import * as store from "../store";
import { IAction } from "./reducer";

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

// Action creators

export interface IAddTaskAction extends IAction {
    data: IAddTaskData;
    projectID: string;
}

export interface IAddTaskData {
    createdAt: Date;
    lastUpdated: Date;
    title: string;
    state: string;
    startWorkDate: Date;
    dueDate: Date;
}

export function addTaskAction(data: IAddTaskData, projectID: string): IAddTaskAction {
    return {
        data,
        projectID,
        type: ADD_TASK,
    };
}

export interface IRemoveTaskAction extends IAction {
    todoItemID: string;
}

export function removeTaskAction(taskID: string): IRemoveTaskAction {
    return {
        todoItemID: taskID,
        type: REMOVE_TASK,
    };
}

export interface IUpdateTaskAction extends IAction {
    todoItem: store.ITodoItem;
}

export function updateTaskAction(task: store.ITodoItem): IUpdateTaskAction {
    return {
        todoItem: task,
        type: UPDATE_TASK,
    };
}

// Reducer

export function reducer(state: store.IStoreState = store.getInitialState(), action: IAction): store.IStoreState {
    switch (action.type) {
        case ADD_TASK:
            return reduceAddTask(state, action as IAddTaskAction);
        case REMOVE_TASK:
            return reduceRemoveTask(state, action as IRemoveTaskAction);
        case UPDATE_TASK:
            return reduceUpdateTask(state, action as IUpdateTaskAction);
        default:
            return state;
    }
}

function reduceAddTask(state: store.IStoreState, action: IAddTaskAction): store.IStoreState {

    const todoItem: store.ITodoItem = {...action.data, id: newUUID(), projectID: action.projectID};

    const project: store.IProject = state.projects.get(todoItem.projectID) as store.IProject;
    const newTaskIDs = project.todoItemIDs.push(todoItem.id);
    const newProject: store.IProject = Object.assign({}, project, { todoItemIDs: newTaskIDs });

    return {
        ...state,
        projects: state.projects.set(project.id, newProject),
        todoItems: state.todoItems.set(todoItem.id, todoItem),
    };
}

function reduceRemoveTask(state: store.IStoreState, action: IRemoveTaskAction): store.IStoreState {

    const todoID = action.todoItemID;

    if (!state.todoItems.has(todoID)) {
        return state;
    }

    const todoItem = state.todoItems.get(todoID);
    const projectID = todoItem.projectID;

    let newProjects = state.projects;
    if (state.projects.has(projectID)) {
        const project = state.projects.get(projectID);
        const todoItemIndex: number = project.todoItemIDs.indexOf(todoID);
        if (todoItemIndex !== -1) {
            const newProject = {...project, todoItemIDs: project.todoItemIDs.delete(todoItemIndex)};
            newProjects = newProjects.set(project.id, newProject);
        }
    }

    return {
        ...state,
        projects: newProjects,
        todoItems: state.todoItems.deleteIn([todoID]),
    };
}

function reduceUpdateTask(state: store.IStoreState, action: IUpdateTaskAction): store.IStoreState {
    const todoID = action.todoItem.id;
    if (!state.todoItems.has(todoID)) {
        return state;
    }

    return {
        ...state,
        todoItems:  state.todoItems.set(todoID, action.todoItem),
    };
}

let todoIDs: number = 0;

function newUUID() {
    todoIDs++;
    return todoIDs.toString();
}
