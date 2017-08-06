import * as store from "../store";
import * as todo from "./todo";

describe("todo", () => {

    const addTaskData: todo.IAddTaskData = {
        createdAt: new Date(),
        dueDate: new Date(),
        lastUpdated: new Date(),
        startWorkDate: new Date(),
        state: "NotStarted",
        title: "Test task",
    };

    const initalState = store.getInitialState();
    const project = initalState.projects.values().next().value;
    const projectID = project.id;

    describe("reducer", () => {
        describe("when given an AddTaskAction", () => {
            const addTask = todo.addTaskAction(addTaskData, projectID);
            const newState = todo.reducer(initalState, addTask);

            it("adds tasks to the state", () => {
                expect(newState).not.toBeNull();
                expect(newState.todoItems.size).toBe(1);
                const addedItem = newState.todoItems.valueSeq().first();

                expect(addedItem).not.toBeNull();
                expect(addedItem.id).not.toBeNull();
                expect(addedItem.createdAt).toBe(addTaskData.createdAt);
                expect(addedItem.dueDate).toBe(addTaskData.dueDate);
                expect(addedItem.lastUpdated).toBe(addTaskData.lastUpdated);
                expect(addedItem.projectID).toBe(projectID);
                expect(addedItem.startWorkDate).toBe(addTaskData.startWorkDate);
                expect(addedItem.state).toBe(addTaskData.state);
                expect(addedItem.title).toBe(addTaskData.title);
            });

            it("adds a reference from the project to the task", () => {
                expect(newState).not.toBeNull();
                expect(newState.todoItems.size).toBe(1);
                const addedItem = newState.todoItems.valueSeq().first();

                const newProject = newState.projects.get(projectID);
                expect(newProject.todoItemIDs).toContain(addedItem.id);
            });
        });

        describe("when given a RemoveTaskAction", () => {
            const addTask = todo.addTaskAction(addTaskData, projectID);
            let newState = todo.reducer(initalState, addTask);
            const task = newState.todoItems.valueSeq().first();

            const removeTask = todo.removeTaskAction(task.id);
            newState = todo.reducer(newState, removeTask);

            it("remove task from the state", () => {
                expect(newState).not.toBeNull();
                expect(newState.todoItems.size).toBe(0);

                const newProject = newState.projects.valueSeq().first();
                expect(newProject.todoItemIDs.size).toBe(0);
            });
        });

        describe("when given an UpdateTaskAction", () => {
            const addTask = todo.addTaskAction(addTaskData, projectID);
            let newState = todo.reducer(initalState, addTask);
            const task = newState.todoItems.valueSeq().first();

            const newTitle: string = "new name";
            const updateTask = todo.updateTaskAction({...task, title: newTitle});
            newState = todo.reducer(newState, updateTask);

            it("updates the task", () => {
                expect(newState).not.toBeNull();
                expect(newState.todoItems.size).toBe(1);
                expect(newState.todoItems.keySeq()).toContain(task.id);
                const updatedTodoItem = newState.todoItems.get(task.id);
                expect(updatedTodoItem.title).toBe(newTitle);
            });
        });
    });

});
