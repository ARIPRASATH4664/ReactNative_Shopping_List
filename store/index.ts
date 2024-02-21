import {createStore} from 'redux';
import {ADD_ITEM_LIST, DELETE_USER_INFO, UPDATE_LIST, UPDATE_USER_INFO} from './action';

const initialState: TInitialState = {
  items: [],
  user: {},
  loggedInStatus: false,
};


export interface TInitialState {
  items: Array<TItems>;
  user: object,
  loggedInStatus: boolean,
}

export interface TItems {
  title: string;
  price: string;
  pending: boolean;
}

export interface TAction {
  type: string;
  payload: TItems;
}


const orderReducer = (state = initialState, action: TAction) => {
  // Handle different action types and update the state accordingly
  switch (action.type) {
    case ADD_ITEM_LIST:
      let ord = state.items;
      const {title, price, pending = true} = action.payload;
      let newObj = {
        title,
        price,
        pending,
      };
      // console.log('SUCK!!! ~ orderReducer ~ ord:', ord);
      ord = [...ord, newObj];

      // console.log('SUCK!!! ~ orderReducer ~ ord:', ord);
      return {
        ...state,
        items: ord,
      };
    case UPDATE_LIST:
      return {
        ...state,
        items: [...action.payload],
      };
    case UPDATE_USER_INFO:
      console.log("SUCK!!! ~ orderReducer ~ action.payload: UPDATE_USER_INFO", action.payload)
      if(action.payload) {

        return {
          ...state,
          user: action.payload,
          loggedInStatus: true
        };
      } else {
        return state;
      }
    case DELETE_USER_INFO:
      console.log("SUCK!!! ~ orderReducer ~ action.payload: DELETE_USER_INFO", action.payload)
      if(action.payload) {
        return {
          ...state,
          user: {},
          loggedInStatus: false
        };
      } else {
        return state;
      }
    default:
      console.log("SUCK!!! ~ orderReducer ~ action.payload: DEFAULT", action.payload)
      return state;
  }
};

export const store = createStore(orderReducer);
