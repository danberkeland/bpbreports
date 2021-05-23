import { updateRoutes } from '../actions'
import { listRoutes } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'


export const fetchRoutes = () => {
  return async (dispatch, getState) => {
    fetchData(listRoutes, "listRoutes", 500).then((data) =>
      dispatch(updateRoutes({ custList: data }))
    );
  };
};