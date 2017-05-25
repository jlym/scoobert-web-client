///<reference path='../../node_modules/immutable/dist/immutable.d.ts'/> 

import { List, Map } from 'immutable';

export interface StoreState {
    projects: Map<string, Project>;
    todoItems: Map<string, TodoItem>;
}

export interface Project {
    id: string;
    name: string;
    states: List<string>;
    startingState: string;
    endingState: string;
    todoItemIDs: List<string>;
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
        states: List<string>(['Not Started', 'In Progress', 'Blocked', 'Done']),
        startingState: 'Not Started',
        endingState: 'Done',
        todoItemIDs:  List<string>()
    };

    return {
        projects: Map<string, Project>({[project.id]: project}),
        todoItems: Map<string, TodoItem>()
    };
}
