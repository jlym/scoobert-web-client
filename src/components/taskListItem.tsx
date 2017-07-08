import * as React from 'react';
import * as StateLabel from './stateLabel';
import * as DueDateLabel from './dueDateLabel';
import * as StartDateLabel from './startDateLabel';
import * as Theme from './theme';

export interface Props {
    task: Task;
    projectStates: string[];
    now: Date;
}

export interface Task {
    taskID: string;
    projectID: string;
    title: string;
    state: string;
    startWorkDate?: Date;
    dueDate?: Date;
}

export const calcDiffInDays = (date1: Date, date2: Date): number => {
    return Math.floor((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
};

export const Component: React.SFC<Props> = (props) => {

    const taskInFinalState = props.task.state === props.projectStates[props.projectStates.length - 1];          

    let textStyle;
    if (taskInFinalState) {
        textStyle = {
            color: Theme.lowPriorityTextColor,
            textDecoration: 'line-through'
        };
    } else {
        textStyle = {
            color: Theme.normalPriorityTextColor
        };
    }
    
    return (
        <div className="todo-item" style={textStyle}>
            {props.task.title}
            <StateLabel.Component {...props}/>
            <StartDateLabel.Component 
                startDate={props.task.startWorkDate}
                now={props.now}
                done={taskInFinalState}
            />
            <DueDateLabel.Component 
                dueDate={props.task.dueDate}
                now={props.now}
                done={taskInFinalState}
            />
        </div>
    );
};
