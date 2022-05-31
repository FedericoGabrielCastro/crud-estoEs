import { SET_SEARCH } from "../types"

const initialState = ""

export const setSearchReducer = (state = initialState, { type, search }) => {
  switch (type) {

  case SET_SEARCH:
    return search

  default:
    return state
  }
}
