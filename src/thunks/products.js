import { updateProducts } from '../actions'
import { listProducts } from '../graphql/queries'
import fetchData from '../helpers/databaseUtils/fetchData'


export const fetchProducts = () => {
  return async (dispatch, getState) => {
    fetchData(listProducts, "listProducts", 500).then((data) =>
      dispatch(updateProducts({ prodList: data }))
    );
  };
};

