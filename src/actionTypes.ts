
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

export interface Action {
    type :string
}

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

export function addTaskAction(task) {
    return {
        type: ADD_TASK,
        task
    };
} 

export function removeTaskAction(taskID) {
    return {
        type: REMOVE_TASK,
        taskID
    };
}

export function updateTaskAction(task) {
    return {
        type: UPDATE_TASK,
        task
    };
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return addTaskReducer(state, action);
        default:
            return state;
    }
}

function addTaskReducer(state, action) {
    let newTask = Object.assign({}, action.task, {
        id: newUUID()
    });
    let newTasks = {};
    newTasks[newTask.id] = newTask;

    let newTodoItems = object.assign({}, state.todoItems, newTasks);
    return object.assign({}, state, {
        todoItems: newTodoItems
    });
}

var todoIDs = 0;

function newUUID() {
    todoIDs++;
    return todoIDs;
}