
export const customersReducer = (state=[], action) => {
    switch(action.type){
        case 'CUSTOMERS':
          return action.payload
        default:
            return state
    }
}

