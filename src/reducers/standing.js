export const standingReducer = (state=[], action) => {
    switch(action.type){
        case 'STANDING':
          return action.payload
        default:
            return state
    }
}

