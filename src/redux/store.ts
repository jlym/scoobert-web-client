/* tslint:disable:no-reference */
///<reference path="../../node_modules/immutable/dist/immutable.d.ts"/>

import { List, Map } from "immutable";

export interface IStoreState {
    projects: Map<string, IProject>;
    todoItems: Map<string, ITodoItem>;
}

export interface IProject {
    id: string;
    name: string;
    states: List<string>;
    startingState: string;
    endingState: string;
    todoItemIDs: List<string>;
}

export interface ITodoItem {
    id: string;
    projectID: string;
    createdAt: Date;
    lastUpdated: Date;
    title: string;
    state: string;
    startWorkDate: Date;
    dueDate: Date;
}

export function getInitialState(): IStoreState {
    const project: IProject = {
        endingState: "Done",
        id: "a0300525-dbfb-485c-af54-727948e664e8",
        name: "default",
        startingState: "Not Started",
        states: List<string>(["Not Started", "In Progress", "Blocked", "Done"]),
        todoItemIDs:  List<string>(),
    };

    return {
        projects: Map<string, IProject>({[project.id]: project}),
        todoItems: Map<string, ITodoItem>(),
    };
}
