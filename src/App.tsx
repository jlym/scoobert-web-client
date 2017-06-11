import * as React from 'react';
import './App.css';
import * as TaskListItem from './components/taskListItem';

const taskProps: TaskListItem.Props = {
    task: {
        taskID: '69131103-9120-4c25-b180-77b7df551fc9',
        projectID: '96dff136-b87f-4cfd-a874-cdc32726bf79',
        title: 'Learn everything or else!',
        state: 'Not Started',
        dueDate: new Date()

    },
    projectStates: [ 'Not Started', 'In Progress', 'Done'],
    now: new Date()
};

const taskProps2: TaskListItem.Props = {
    task: {
        taskID: '69131103-9120-4c25-b180-77b7df551fc1',
        projectID: '96dff136-b87f-4cfd-a874-cdc32726bf79',
        title: 'Eat cake!',
        state: 'Done'
    },
    projectStates: [ 'Not Started', 'In Progress', 'Done'],
    now: new Date()
};

const taskProps3: TaskListItem.Props = {
    task: {
        taskID: '69131103-9120-4c25-b180-77b7df551fcr',
        projectID: '96dff136-b87f-4cfd-a874-cdc32726bf79',
        title: 'Get Fat!',
        state: 'In Progress'
    },
    projectStates: [ 'Not Started', 'In Progress', 'Done'],
    now: new Date()

};

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="app">
          <nav className="pure-menu pure-menu-horizontal">
              <a href="#" className="pure-menu-heading pure-menu-link">TODOIST CLONE</a>
              <ul className="pure-menu-list">
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link">Logout</a></li>
              </ul>
          </nav>

        <div className="pure-g outermost">
            <div className="pure-u-1-4"/>
            <div className="pure-u-1-6 leftbar">
                <h2>Projects</h2>

                <div className="pure-menu custom-restricted-width">
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">App</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Meal Reviews</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Add Project</a></li>
                    </ul>
                </div>
            </div>
            <div className="pure-u-1-3 centercontent">

                <h2> React Practice </h2>
                
                <TaskListItem.Component {...taskProps}/>
                <TaskListItem.Component {...taskProps2}/>
                <TaskListItem.Component {...taskProps3}/>

                <div className="todo-item">
                    Basic user creation
                    <span className="item-label medium-priority">In Progress</span>
                </div>
                
                <div className="todo-item todo-indent-2 done-todo-item">
                    Create sign up page
                    <span className="item-label done-label">Done</span>
                    <span className="item-label done-label">Do Tomorrow</span>
                </div>
                <div className="todo-item todo-indent-2">
                    Create a database to store users
                    <span className="item-label medium-priority">In Progress</span>
                    <span className="item-label high-priority">Do Today</span>
                </div>
                <div className="todo-item todo-indent-2">
                    Create controller
                    <span className="item-label low-priority">Not started</span>
                    <span className="item-label high-priority">Do Today</span>
                    <span className="item-label low-priority">Due Friday</span>
                </div>

                <div className="todo-item">
                    All the Lorem Ipsum generators on the Internet tend to repeat 
                    predefined chunks as necessary, making this the first true generator on
                    <span className="item-label medium-priority">In Progress</span>
                </div>
                <div className="todo-item todo-indent-2 done-todo-item">
                    Create sign up page
                    <span className="item-label done-label">Done</span>
                    <span className="item-label done-label">Do Tomorrow</span>
                </div>
                <div className="todo-item todo-indent-2">
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected 
                    humour, or randomised words which don't look even slightly 
                    believable. If you are going to use a passage of Lorem Ipsum
                    <span className="item-label medium-priority">In Progress</span>
                    <span className="item-label high-priority">Do Today</span>
                </div>
                <div className="todo-item todo-indent-2">
                    Create controller
                    <span className="item-label low-priority">Not started</span>
                    <span className="item-label high-priority">Do Today</span>
                    <span className="item-label low-priority">Due Friday</span>
                </div>

                <form className="pure-form pure-form-aligned todo-indent-2">
                    <fieldset>
                        
                        <legend>Edit Task</legend>

                        <div className="pure-control-group">
                            <label htmlFor="desc-text-area">Description</label>
                            <input type="text" placeholder="Task description"/>                        
                        </div>

                        <div className="pure-control-group">
                            <label htmlFor="state">State</label>
                            <select id="state">
                                <option>Not Started</option>
                                <option>Blocked</option>
                                <option>In Progress</option>
                                <option>Done</option>
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
        </div>
    </div>
    );
  }
}

export default App;
