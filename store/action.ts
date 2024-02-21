export const ADD_ITEM_LIST = 'ADD_ITEM_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';

interface TPayload {
    price: string,
    title: string,
    pending?: boolean
}

export const addItemList = (payload:TPayload) => {
  return {
    type: ADD_ITEM_LIST,
    payload,
  };
};

export const updateList = (payload:Array<TPayload>) => {
  // console.log("SUCK!!! ~ updateList ~ payload:", payload)

  return {
    type: UPDATE_LIST,
    payload,
  };
};

export const updateUserInfo = (payload:{}) => {
  // console.log("SUCK!!! ~ updateList ~ payload:", payload)

  return {
    type: UPDATE_USER_INFO,
    payload,
  };
};

export const deleteUserInfo = (payload:{}) => {
  // console.log("SUCK!!! ~ updateList ~ payload:", payload)

  return {
    type: DELETE_USER_INFO,
    payload,
  };
};