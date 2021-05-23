import { updateDoughComponents } from '../actions'
import { listDoughComponents } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'


export const fetchDoughComponents = () => {
  return async (dispatch, getState) => {
    fetchData(listDoughComponents, "listDoughComponents", 500).then((data) =>
      dispatch(updateDoughComponents({ prodList: data }))
    );
  };
};