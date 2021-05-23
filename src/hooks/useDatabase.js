import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchProducts } from "../thunks/products";
import { fetchCustomers } from "../thunks/customers";
import { fetchRoutes } from "../thunks/routes";
import { fetchStanding } from "../thunks/standing";
import { fetchOrders } from "../thunks/orders";
import { fetchDoughs } from "../thunks/doughs";
import { fetchDoughComponents } from "../thunks/doughComponents";

const useDatabase = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCustomers());
    dispatch(fetchRoutes());
    dispatch(fetchStanding());
    dispatch(fetchOrders());
    dispatch(fetchDoughs());
    dispatch(fetchDoughComponents());
  }, []);
};

export default useDatabase;
