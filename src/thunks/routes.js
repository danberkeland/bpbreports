import { updateRoutes, oneDBLoaded } from '../actions'
import { listRoutes } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

const finishTrans = (dispatch, data, attr) => {
  dispatch(updateRoutes({ routeList: data }))
  dispatch(oneDBLoaded())
}


export const fetchRoutes = () => {

  return async (dispatch, getState) => {
    fetchData(listRoutes, "listRoutes", 500).then((data) => finishTrans(dispatch, data)     
    )     
  };
};