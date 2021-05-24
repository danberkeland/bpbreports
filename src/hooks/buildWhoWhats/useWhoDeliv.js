import { sortAtoZDataByIndex } from '../../helpers/dataSortHelpers'
import { BuildFullOrders } from '../../helpers/fullOrdersBuilders'

const useWhoDeliv = (date) => {

  let fullOrders = BuildFullOrders(date) 
  fullOrders && sortAtoZDataByIndex(fullOrders, "custName")
  
  return fullOrders

}

export default useWhoDeliv;