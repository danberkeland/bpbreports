import { updateOrders } from '../actions'
import { listOrders } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'


export const fetchOrders = () => {
  return async (dispatch, getState) => {
    fetchData(listOrders, "listOrders", 500).then((data) =>
      dispatch(updateOrders({ ordersList: data }))
    );
  };
};