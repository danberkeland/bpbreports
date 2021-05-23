
import { useSelector } from 'react-redux'



const useWhatBake = (date, location) => {
 
  const whatBake = useSelector(state => state.products.prodList)

  return whatBake

}

export default useWhatBake;
