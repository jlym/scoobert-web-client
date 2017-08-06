import * as store from "./store";

describe("store", () => {
    describe("getInitialState()", () => {
        it("allows getting an initial state", () => {
            const state = store.getInitialState();
            expect(state).not.toBeNull();
            expect(state.projects).not.toBeNull();
            expect(state.todoItems).not.toBeNull();
        });
    });
});
