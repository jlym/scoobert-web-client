import * as React from 'react';
import * as StateLabel from './stateLabel';
import * as DueDateLabel from './dueDateLabel';

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

export const TaskListItemComponent: React.SFC<Props> = (props) => {

    /*
    let stateLabel = null;
    const isFinalState = props.task.state !== props.projectStates[props.projectStates.length - 1];

    if (props.task.state !== props.projectStates[0]) {        
        const color = isFinalState ? grey : white;
        const backgroundColor = isFinalState ? white : grey;
        const border = isFinalState ? '1px solid rgb(150, 150, 150)' : '';
        let style = {
            color: color,
            backgroundColor: backgroundColor,
            border: border
        };    
        
        stateLabel = <span className="item-label medium-priority" style={style}>{props.task.state}</span>;
    }

    if (props.task.dueDate) {

    }   

    const diffInDays = calcDiffInDays(props.task.dueDate, props.now);
    if (diffInDays === 0) {

    } 
    else if diffInDays === 1 {

    }
*/

    const dueDateLabelProps: DueDateLabel.Props = {
        dueDate: props.task.dueDate,
        now: props.now,
        done: props.task.state === props.projectStates[props.projectStates.length - 1]
    };
    return (
        <div className="todo-item">
            {props.task.title}
            <StateLabel.StateLabelComponent {...props}/>
            <DueDateLabel.DueDateLabelComponent {...dueDateLabelProps}/>
        </div>
    );
};
