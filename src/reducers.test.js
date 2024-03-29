import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '',
  }
  it('should return thi initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
})

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: true
  }
  it('should return thi initial state', () => {
    expect(reducers.requestRobots(initialStateRobots, {})).toEqual({ robots: [], isPending: true })
  })

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({ robots: [], isPending: true })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: 1,
        name: 'john',
        email: 'john@example.com'
      }]
    })).toEqual({
      robots: [{
        id: 1,
        name: 'john',
        email: 'john@example.com'
      }],
      isPending: false
    })
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'Error for requestRobots'
    })).toEqual({
      robots: [],
      isPending: true,
      error: "Error for requestRobots"
    })
  })
})