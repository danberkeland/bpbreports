export const updateProducts = (payload) => {
    return {
        type: 'PRODUCTS',
        payload: payload
    };
};

export const updateCustomers = (payload) => {
    return {
        type: 'CUSTOMERS',
        payload: payload
    };
};

export const updateRoutes = (payload) => {
    return {
        type: 'ROUTES',
        payload: payload
    };
};

export const updateStanding = (payload) => {
    return {
        type: 'STANDING',
        payload: payload
    };
};

export const updateOrders = (payload) => {
    return {
        type: 'ORDERS',
        payload: payload
    };
};

export const updateDoughs = (payload) => {
    return {
        type: 'DOUGHS',
        payload: payload
    };
};

export const updateDoughComponents = (payload) => {
    return {
        type: 'DOUGH_COMPONENTS',
        payload: payload
    };
};