import { updateOrders, oneDBLoaded } from '../actions'
import { listOrders } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

const finishTrans = (dispatch, data, attr) => {
  dispatch(updateOrders({ ordersList: data }))
  dispatch(oneDBLoaded())
}

//  Set up filter that only loads yesterday's date forward


export const fetchOrders = () => {

  return async (dispatch, getState) => {
    fetchData(listOrders, "listOrders", 5000).then((data) => finishTrans(dispatch, data)     
    )     
  };
};