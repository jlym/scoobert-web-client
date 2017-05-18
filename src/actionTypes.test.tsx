import * as ActionTypes from "./actionTypes";

it("allows getting an initial state", () => {
    const state = ActionTypes.getInitialState();
    expect(state).not.toBeNull();
    expect(state.projects).not.toBeNull();
    expect(state.todoItems).not.toBeNull();
});
