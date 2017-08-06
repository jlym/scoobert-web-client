import * as React from "react";
import * as TaskListItem from "./taskListItem";

export interface IProps {
    tasks: ITask[];
    projectStates: string[];
    now: Date;
}

export interface ITask {
    taskID: string;
    projectID: string;
    title: string;
    state: string;
    startWorkDate?: Date;
    dueDate?: Date;
}

const GetTaskListItem = (props: IProps, task: ITask) => {
    return (
        <TaskListItem.Component
            task={task}
            now={props.now}
            projectStates={props.projectStates}
            key={task.taskID}
        />
    );
};

export const Component: React.SFC<IProps> = (props) => {

    return (
        <div>
            {props.tasks.map((task: ITask, i: number) => GetTaskListItem(props, task))}
        </div>
    );
};
