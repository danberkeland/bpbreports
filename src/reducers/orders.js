export const orderssReducer = (state=[], action) => {
    switch(action.type){
        case 'ORDERS':
          return action.payload
        default:
            return state
    }
}

