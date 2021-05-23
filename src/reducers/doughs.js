export const doughssReducer = (state=[], action) => {
    switch(action.type){
        case 'DOUGHS':
          return action.payload
        default:
            return state
    }
}

