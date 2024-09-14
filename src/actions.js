// Action to update the user's name
export const updateName = (name) => {
    return {
      type: 'UPDATE_NAME',
      payload: name
    };
  };
  
  // Action to update the user's email
  export const updateEmail = (email) => {
    return {
      type: 'UPDATE_EMAIL',
      payload: email
    };
  };
  