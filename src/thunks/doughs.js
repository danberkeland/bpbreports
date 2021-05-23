import { updateDoughs } from '../actions'
import { listDoughs } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'


export const fetchDoughs = () => {
  return async (dispatch, getState) => {
    fetchData(listDoughs, "listDoughs", 500).then((data) =>
      dispatch(updateDoughs({ doughList: data }))
    );
  };
};