"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContext = void 0;
var initialState = {
  budget: 2000,
  expenses: [{
    id: 12,
    name: 'shopping',
    cost: 40
  }, {
    id: 13,
    name: 'holiday',
    cost: 400
  }, {
    id: 14,
    name: 'car service',
    cost: 50
  }]
};
var AppContext = createContext();
exports.AppContext = AppContext;