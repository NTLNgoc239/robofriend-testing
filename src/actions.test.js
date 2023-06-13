import { configure } from "enzyme";
import * as actions from "./actions";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants'
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an antion to search robots', () => {
  const text = 'wooo';
  const expectAction = {
    type: 'CHANGE_SEARCHFIELD',
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectAction)
})

it('handle request robots from api', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectAction = {
    type: 'REQUEST_ROBOTS_PENDING',
  }
  expect(action[0]).toEqual(expectAction)
})