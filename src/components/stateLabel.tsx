import * as React from "react";
import * as Theme from "./theme";

export interface IProps {
    task: ITask;
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

export class Component extends React.Component<IProps, {}> {
    public render() {
        const isFirstState = this.props.task.state === this.props.projectStates[0];
        const isFinalState = this.props.task.state === this.props.projectStates[this.props.projectStates.length - 1];

        return isFirstState || isFinalState ?
            null :
            (
                <span className="item-label" style={Theme.normalPriorityLabelStyle}>
                    {this.props.task.state}
                </span>
            );
    }
}
