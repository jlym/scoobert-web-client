
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
    projectID: string;
    createdAt: Date;
    lastUpdated: Date;
    title: string;
    state: string;
    startWorkDate: Date;
    dueDate: Date;
}

export function getInitialState(): StoreState {
    const project: Project = {
        id: 'a0300525-dbfb-485c-af54-727948e664e8',
        name: 'default',
        states: ['Not Started', 'In Progress', 'Blocked', 'Done'],
        startingState: 'Not Started',
        endingState: 'Done',
        todoItemIDs: []
    };

    const projects: Map<string, Project> = new Map<string, Project>();
    projects.set(project.id, project);

    return {
        projects: projects,
        todoItems: new Map<string, TodoItem>()
    };
}
