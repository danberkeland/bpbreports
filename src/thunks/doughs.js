import { updateDoughs, oneDBLoaded } from '../actions'
import { listDoughs } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

const finishTrans = (dispatch, data, attr) => {
  dispatch(updateDoughs({ doughsList: data }))
  dispatch(oneDBLoaded())
}


export const fetchDoughs = () => {

  return async (dispatch, getState) => {
    fetchData(listDoughs, "listDoughs", 500).then((data) => finishTrans(dispatch, data)     
    )     
  };
};