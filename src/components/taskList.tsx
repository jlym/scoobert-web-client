import * as React from 'react';
import * as TaskListItem from './taskListItem';

export interface Props {
    tasks: Task[];
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

export const Component: React.SFC<Props> = (props) => {

    return (
        <div>
            {props.tasks.map(function(task: Task, i: number){
                return (
                    <TaskListItem.Component
                        task={task}
                        now={props.now}
                        projectStates={props.projectStates}
                        key={task.taskID} 
                    />
                );
            })} 
        </div>
    );
};
