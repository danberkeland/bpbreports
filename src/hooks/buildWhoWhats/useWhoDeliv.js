import { useSelector } from 'react-redux'

const useWhoDeliv = (date) => {
 
  const whoDeliv = useSelector(state => state.customers.custList)
  // build full orders for date
  // reduce to whoDeliv array

  return whoDeliv

}
export default useWhoDeliv;
