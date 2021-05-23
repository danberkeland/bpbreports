import { updateStanding } from '../actions'
import { listStandings } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'

export const fetchStanding = () => {
  return async (dispatch, getState) => {
    fetchData(listStandings, "listStandings", 500).then((data) =>
      dispatch(updateStanding({ custList: data }))
    );
  };
};