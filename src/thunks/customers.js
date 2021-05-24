import { updateCustomers, oneDBLoaded } from '../actions'
import { listCustomers } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

const finishTrans = (dispatch, data, attr) => {
  dispatch(updateCustomers({ custList: data }))
  dispatch(oneDBLoaded())
}


export const fetchCustomers = () => {

  return async (dispatch, getState) => {
    fetchData(listCustomers, "listCustomers", 500).then((data) => finishTrans(dispatch, data)     
    )     
  };
};