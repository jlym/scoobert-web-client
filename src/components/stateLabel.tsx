import * as React from 'react';

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

const grey = 'rgb(150, 150, 150)';
const white = 'rgb(255, 255, 255)';

export class StateLabelComponent extends React.Component<Props, {}> {
  render() {
    let stateLabel = null;
    
    const isFirstState = this.props.task.state !== this.props.projectStates[0];
    const isFinalState = this.props.task.state !== this.props.projectStates[this.props.projectStates.length - 1];

    if (isFirstState) {     

        const color = isFinalState ? grey : white;
        const backgroundColor = isFinalState ? white : grey;        
        const border = isFinalState ? '1px solid rgb(150, 150, 150)' : '';

        let style = {
            color: color,
            backgroundColor: backgroundColor,
            border: border
        };    
        
        stateLabel = <span className="item-label medium-priority" style={style}>{this.props.task.state}</span>;
    }

    return (
        stateLabel
    );
  }
}
