import { convertDatetoBPBDate, todayPlus, convertDateToDayOfWeek  } from './timeDateHelpers'

import { useSelector } from 'react-redux'

const clonedeep = require("lodash.clonedeep");

const today = convertDatetoBPBDate(todayPlus()[0])

export const BuildFullOrders = (date) => {
  let cartList = BuildCartList(date)
  let standList = BuildStandList(date)
  let fullOrder = compileFullOrderList(cartList, standList);
  
  return fullOrder
}

const BuildCartList = (date) => {
 
  const orders = useSelector(state => state.orders.ordersList)
  
  let BPBDate = (date);
    let filteredOrders = clonedeep(orders);
    let builtCartList = [];
    if (filteredOrders) {
      builtCartList = filteredOrders.filter(
        (order) =>
          order["delivDate"] === BPBDate        
      );
      return builtCartList
    }
}


const BuildStandList = (date) => {
  let builtStandList = useSelector((state) => state.standing.standingList);
  let convertedStandList;
  if (builtStandList) {
    if (date === today) {
      builtStandList = builtStandList.filter((stand) => stand.isStand === true);
    }
    convertedStandList = convertStandListtoStandArray(builtStandList, date);
    return convertedStandList;
  }
};


const convertStandListtoStandArray = (
  builtStandList,
  date
) => {
  let dayOfWeek = convertDateToDayOfWeek(date)
  let convertedStandList = builtStandList.map((order) => ({
    qty: order[dayOfWeek],
    prodName: order["prodName"],
    custName: order["custName"],
    delivDate: date,
    timeStamp: order["timeStamp"],
    SO: order[dayOfWeek],
  }));
  return convertedStandList;
};

export const compileFullOrderList = (cartList, standList) => {
  if (cartList && standList){
    let orderList = cartList.concat(standList);

  for (let i = 0; i < orderList.length; ++i) {
    for (let j = i + 1; j < orderList.length; ++j) {
      if (
        orderList[i]["prodName"] === orderList[j]["prodName"] &&
        orderList[i]["custName"] === orderList[j]["custName"]
      ) {
        orderList.splice(j, 1);
      }
    }
  }
  orderList = orderList.filter(ord => ord.qty>0)
  return orderList;
  }
  
};




