import * as React from "react";
import "./App.css";
import * as TaskList from "./components/taskList";

const today = new Date(2017, 2, 12);
const tomorrow = new Date(2017, 2, 13);
const nextWeek = new Date(2017, 2, 19);

const taskListProps: TaskList.IProps = {
    now: today,
    projectStates: [ "Not Started", "In Progress", "Done"],
    tasks: [
        {
            dueDate: today,
            projectID: "96dff136-b87f-4cfd-a874-cdc32726bf79",
            startWorkDate: today,
            state: "Not Started",
            taskID: "69131103-9120-4c25-b180-77b7df551fc9",
            title: "Learn everything or else!",
        }, {
            projectID: "96dff136-b87f-4cfd-a874-cdc32726bf79",
            startWorkDate: today,
            state: "Done",
            taskID: "69131103-9120-4c25-b180-77b7df551fc1",
            title: "Eat cake!",
        }, {
            dueDate: nextWeek,
            projectID: "96dff136-b87f-4cfd-a874-cdc32726bf79",
            startWorkDate: tomorrow,
            state: "In Progress",
            taskID: "69131103-9120-4c25-b180-77b7df551fcr",
            title: "Get Fat!",
        },
    ],
};

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
          <nav className="pure-menu pure-menu-horizontal">
              <a href="#" className="pure-menu-heading pure-menu-link">Scoobert</a>
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

                <TaskList.Component {...taskListProps}/>

                <form className="pure-form pure-form-aligned">
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
