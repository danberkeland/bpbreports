export const routesReducer = (state=[], action) => {
    switch(action.type){
        case 'ROUTES':
          return action.payload
        default:
            return state
    }
}

