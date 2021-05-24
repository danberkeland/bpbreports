import { updateStanding, oneDBLoaded } from '../actions'
import { listStandings } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

const finishTrans = (dispatch, data, attr) => {
  dispatch(updateStanding({ routeList: data }))
  dispatch(oneDBLoaded())
}


export const fetchStanding = () => {

  return async (dispatch, getState) => {
    fetchData(listStandings, "listStandings", 500).then((data) => finishTrans(dispatch, data)     
    )     
  };
};