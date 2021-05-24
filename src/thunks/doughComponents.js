import { updateDoughComponents, oneDBLoaded } from '../actions'
import { listDoughComponents } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

const finishTrans = (dispatch, data, attr) => {
  dispatch(updateDoughComponents({ doughComponentsList: data }))
  dispatch(oneDBLoaded())
}


export const fetchDoughComponents = () => {

  return async (dispatch, getState) => {
    fetchData(listDoughComponents, "listDoughComponents", 500).then((data) => finishTrans(dispatch, data)     
    )     
  };
};