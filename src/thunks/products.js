import { updateProducts, oneDBLoaded } from '../actions'
import { listProducts } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

const finishTrans = (dispatch, data, attr) => {
  dispatch(updateProducts({ prodList: data }))
  dispatch(oneDBLoaded())
}


export const fetchProducts = () => {

  return async (dispatch, getState) => {
    fetchData(listProducts, "listProducts", 500).then((data) => finishTrans(dispatch, data)     
    )     
  };
};