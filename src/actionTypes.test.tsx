import * as ActionTypes from "./actionTypes";

it("allows getting an initial state", () => {
    const state = ActionTypes.getInitialState();
    expect(state).not.toBeNull();
    expect(state.projects).not.toBeNull();
    expect(state.todoItems).not.toBeNull();
});

it("allows adding a task", () => {
    const initalState = ActionTypes.getInitialState();

    const project = initalState.projects.values().next().value;
    const task : ActionTypes.TodoItem = {
        id: "",
        projectID: project.id,
        createdAt: new Date(),
        lastUpdated: new Date(),
        title: "Doing stuff",
        state: "NotStarted",
        dueDate: new Date(),
        startWorkDate: new Date()
    };
    const addTask = ActionTypes.addTaskAction(task);

    let newState = ActionTypes.appReducer(initalState, addTask);
    expect(newState).not.toBeNull();
    expect(newState.todoItems.size).toBe(1);
});