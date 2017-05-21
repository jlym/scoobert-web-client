import * as store from '../store';
import * as todo from './todo';

describe('todo', () => {
    const initalState = store.getInitialState();
    const project = initalState.projects.values().next().value;

    it('addTaskAction', () => {
        it('adds tasks to the state', () => {
            const task: store.TodoItem = {
                id: '',
                projectID: project.id,
                createdAt: new Date(),
                lastUpdated: new Date(),
                title: 'Doing stuff',
                state: 'NotStarted',
                dueDate: new Date(),
                startWorkDate: new Date()
            };
            const addTask = todo.addTaskAction(task);

            const newState = todo.reducer(initalState, addTask);
            expect(newState).not.toBeNull();
            expect(newState.todoItems.size).toBe(1);
        });      
    });
});
