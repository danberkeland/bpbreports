
export const productsReducer = (state=[], action) => {
    switch(action.type){
        case 'PRODUCTS':
          return action.payload
        default:
            return state
    }
}

