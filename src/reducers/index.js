import { customersReducer } from './customers';
import { productsReducer}  from './products';
import { combineReducers } from 'redux';
import { routesReducer } from './routes';
import { standingReducer } from './standing';
import { orderssReducer } from './orders';
import { doughssReducer } from './doughs';
import { doughComponentsReducer } from './doughComponents';

export const allReducers = combineReducers({
    customers: customersReducer,
    products: productsReducer,
    routes: routesReducer,
    standing: standingReducer,
    orders: orderssReducer,
    doughs: doughssReducer,
    doughComponents: doughComponentsReducer
})
