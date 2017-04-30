
const initialState = {
    projects: [
        {
            id: "{abcd-defgh-ighkl-msdf}",
            name: "default",
            states: ["Not Started", "In Progress", "Blocked", "Done"],
            startingState: "Not Started",
            endingState: "Done",
            todoItemIDs: [
                "{sdfad-sdfasdf-sfasdf-sdafdf}",
                "{sdfad-sdfasdf-sfasdf-sdafdf}"
            ]
        }
    ],
    todoItems: {}
};

const sampleState = {
    projects: [
        {
            id: "{abcd-defgh-ighkl-msdf}",
            name: "default",
            states: ["Not Started", "In Progress", "Blocked", "Done"],
            startingState: "Not Started",
            endingState: "Done",
            todoItemIDs: [
                "{sdfad-sdfasdf-sfasdf-sdafdf}",
                "{sdfad-sdfasdf-sfasdf-sdafdf}"
            ]
        }
    ],
    todoItems: [
        {
            id: "{sdfad-sdfasdf-sfasdf-sdafdf}",
            createdAt: new Date(2017, 1, 23, 13, 12),
            lastUpdated: new Date(2017, 1, 23, 13, 12),
            title: "Let's do this.",
            state: "In Progress",
            startWorkDate: new Date(2017, 1, 23, 13, 12),
            dueDate: new Date(2017, 1, 23, 13, 12),
        },{
            id: "{sdfad-sdfasdf-sfasdf-sdafdf}",
            createdAt: new Date(2017, 1, 23, 13, 12),
            lastUpdated: new Date(2017, 1, 23, 13, 12),
            title: "Let's do this.",
            state: "In Progress",
            startWorkDate: new Date(2017, 1, 23, 13, 12),
            dueDate: new Date(2017, 1, 23, 13, 12),
        }
    ]
};

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
    newTask = Object.assign({}, action.task, {
        id: newUUID()
    });
    newTasks = {};
    newTasks[newTask.id] = newTask;

    newTodoItems = object.assign({}, state.todoItems, newTasks);
    return object.assign({}, state, {
        todoItems: newTodoItems
    });
}

var todoIDs = 0;

function newUUID() {
    todoIDs++;
    return todoIDs;
}