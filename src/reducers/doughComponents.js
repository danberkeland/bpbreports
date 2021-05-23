export const doughComponentsReducer = (state=[], action) => {
    switch(action.type){
        case 'DOUGH_COMPONENTS':
          return action.payload
        default:
            return state
    }
}

