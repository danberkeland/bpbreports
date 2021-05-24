
import { useSelector } from 'react-redux'



const useWhatDeliv = (date) => {
 
  const whatDeliv = useSelector(state => state.products.prodList)
  // build full orders for date
  // construct whatDeliv array by product
  
  return whatDeliv

}

export default useWhatDeliv;
