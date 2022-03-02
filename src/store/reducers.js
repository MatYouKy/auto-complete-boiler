import { INPUT_CHANGE_VALUE, ITEM_HANDLER, FETCH_USERS } from "./actions";
import { extractedValue, targetUserValue } from './helpers';

const initialState = {
  inputValue: '',
  extractedArray: [],
  users: []
}

export const reducers = (state = initialState, action) => {
  switch(action.type) {
    case INPUT_CHANGE_VALUE:
      const { inputValue, extractedArray } = extractedValue(action.value, state.users);
      return {
        ...state,
        inputValue,
        extractedArray
      }
        
    case ITEM_HANDLER: 
      const targetValue = targetUserValue(action.id, state.users);
      return {
        ...state,
        inputValue: targetValue,
        extractedArray: []
      }

    case FETCH_USERS: 
      return {
        ...state, 
        users: action.users
      }

    default: 
      return state;
  };
};
