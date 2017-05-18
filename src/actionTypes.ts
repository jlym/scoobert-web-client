
export interface StoreState {
    projects: Map<string, Project>;
    todoItems: Map<string, TodoItem>;
}

export interface Project {
    id: string;
    name: string;
    states: string[];
    startingState: string;
    endingState: string;
    todoItemIDs: string[];
}

export interface TodoItem {
    id: string;
    projectID : string;
    createdAt: Date;
    lastUpdated: Date;
    title: string;
    state: string;
    startWorkDate: Date;
    dueDate: Date;
}

export function getInitialState(): StoreState {
    const project :Project = {
        id: "a0300525-dbfb-485c-af54-727948e664e8",
        name: "default",
        states: ["Not Started", "In Progress", "Blocked", "Done"],
        startingState: "Not Started",
        endingState: "Done",
        todoItemIDs: []
    };

    const projects: Map<string, Project> = new Map<string, Project>();
    projects.set(project.id, project);

    return {
        projects: projects,
        todoItems: new Map<string, TodoItem>()
    };
} 



export const ADD_TASK = "ADD_TASK";
export type ADD_TASK = typeof ADD_TASK;

export const REMOVE_TASK = "REMOVE_TASK";
export type REMOVE_TASK = typeof REMOVE_TASK;

export const UPDATE_TASK = "UPDATE_TASK";
export type UPDATE_TASK = typeof UPDATE_TASK;

export interface Action {
    type :string;
}

export interface AddTaskAction extends Action {
    todoItem: TodoItem;
}

export interface RemoveTaskAction extends Action {
    todoItemID: string;
}

export interface UpdateTaskAction extends Action {
    todoItem: TodoItem;
}

export type TaskAction = AddTaskAction | RemoveTaskAction | UpdateTaskAction;

export function addTaskAction(task : TodoItem) : AddTaskAction {
    return {
        type: ADD_TASK,
        todoItem: task
    };
} 

export function removeTaskAction(taskID : string) : RemoveTaskAction {
    return {
        type: REMOVE_TASK,
        todoItemID: taskID
    };
}

export function updateTaskAction(task : TodoItem) : UpdateTaskAction {
    return {
        type: UPDATE_TASK,
        todoItem: task
    };
}

export function appReducer(state : StoreState = getInitialState(), action : TaskAction) : StoreState {
    switch (action.type) {
        case ADD_TASK:
            return reduceAddTask(state, action as AddTaskAction);
        default:
            return state;
    }
}

function reduceAddTask(state : StoreState, action : AddTaskAction) : StoreState {

    const newTodoItem = Object.assign({}, action.todoItem, {
        id: newUUID()
    });
    const newTodoItems = new Map<string, TodoItem>(state.todoItems);
    newTodoItems.set(newTodoItem.id, newTodoItem);

    const newProjects :  Map<string, Project> = new Map<string, Project>(state.projects);
    let project : Project = newProjects.get(newTodoItem.projectID) as Project;
    let newTaskIDs : string[] = [...project.todoItemIDs, newTodoItem.id];
    let newProject : Project = Object.assign({}, project, { todoItemIDs : newTaskIDs });
    newProjects[project.id] = newProject;

    return Object.assign({}, state, {
        projects: newProjects,
        todoItems: newTodoItems
    });
}

var todoIDs : number = 0;

function newUUID() {
    todoIDs++;
    return todoIDs.toString();
}
