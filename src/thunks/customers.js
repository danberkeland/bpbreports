import { updateCustomers } from '../actions'
import { listCustomers } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'


export const fetchCustomers = () => {
  return async (dispatch, getState) => {
    fetchData(listCustomers, "listCustomers", 500).then((data) =>
      dispatch(updateCustomers({ custList: data }))
    );
  };
};