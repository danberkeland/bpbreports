
import { sortAtoZDataByIndex } from '../../helpers/dataSortHelpers'
import { BuildFullOrders } from '../../helpers/fullOrdersBuilders'

const useWhatDeliv = (date) => {

  let fullOrders = BuildFullOrders(date) 
  fullOrders && sortAtoZDataByIndex(fullOrders, "prodName")
  
  return fullOrders

}

export default useWhatDeliv;
