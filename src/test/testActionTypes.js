import * as actions from "../actionTypes.js";

var expect = require('chai').expect;

describe("appReducer", function() {
    describe("should banana", function() {
        var action = {
            type: "UNKNOWN"
        };
        var a = actions.appReducer(undefined, action);
        expect(a).to.have.property("todoItems");
    })
});

