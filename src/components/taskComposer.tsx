import * as React from 'react';
import * as TaskListItem from './taskListItem';

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

export const Component: React.SFC<Props> = (props) => {

    return (
        <div>
            <form className="pure-form pure-form-aligned">
                <fieldset>
                    
                    <legend>Edit Task</legend>

                    <div className="pure-control-group">
                        <label htmlFor="desc-text-area">Description</label>
                        <input type="text" placeholder="Task description"> 
                            {{props.task.title}}
                        </input> 
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="state">State</label>
                        <select id="state">
                            {props.projectStates.map(function(state: string, i: number){
                                return (
                                    <option>{{state}}</option>
                                );
                            })} 
                        </select>
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="due-field">Due</label> 
                        <input id="due-field" type="date"/>
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="schedule-field">Schedule for</label>
                        <input id="schedule-field" type="date"/>
                    </div>

                    <div className="pure-controls">
                        <button type="submit" className="pure-button pure-button-primary">OK</button>
                        <button type="submit" className="pure-button">Cancel</button>
                        <button type="submit" className="pure-button">Delete</button>
                    </div>
                </fieldset>
            </form>
            <div className="button-panel">
                <button className="pure-button">Add Task</button>
            </div>
        </div>
    );
};
