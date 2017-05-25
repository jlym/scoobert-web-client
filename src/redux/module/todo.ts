import { Action } from './reducer';
import * as store from '../store';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

// Action creators

export interface AddTaskAction extends Action {
    data: AddTaskData;
    projectID: string;
}

export interface AddTaskData {
    createdAt: Date;
    lastUpdated: Date;
    title: string;
    state: string;
    startWorkDate: Date;
    dueDate: Date;
}

export function addTaskAction(data: AddTaskData, projectID: string): AddTaskAction {
    return {
        type: ADD_TASK,        
        data: data,
        projectID: projectID
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
        case REMOVE_TASK:
            return reduceRemoveTask(state, action as RemoveTaskAction);
        case UPDATE_TASK:
            return reduceUpdateTask(state, action as UpdateTaskAction);
        default:
            return state;
    }
}

function reduceAddTask(state: store.StoreState, action: AddTaskAction): store.StoreState {

    const todoItem: store.TodoItem = {...action.data, id: newUUID(), projectID: action.projectID};   

    const project: store.Project = state.projects.get(todoItem.projectID) as store.Project;
    const newTaskIDs = project.todoItemIDs.push(todoItem.id);
    const newProject: store.Project = Object.assign({}, project, { todoItemIDs: newTaskIDs });

    return {
        ...state, 
        projects: state.projects.set(project.id, newProject),
        todoItems: state.todoItems.set(todoItem.id, todoItem)
    };
}

function reduceRemoveTask(state: store.StoreState, action: RemoveTaskAction): store.StoreState {

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
        todoItems: state.todoItems.deleteIn([todoID])
    };
}

function reduceUpdateTask(state: store.StoreState, action: UpdateTaskAction): store.StoreState {
    const todoID = action.todoItem.id;
    if (!state.todoItems.has(todoID)) {
        return state;
    }

    return {
        ...state,
        todoItems:  state.todoItems.set(todoID, action.todoItem)
    };    
}

var todoIDs: number = 0;

function newUUID() {
    todoIDs++;
    return todoIDs.toString();
}
