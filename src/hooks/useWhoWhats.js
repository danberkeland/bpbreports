import useWhatDeliv from "./buildWhoWhats/useWhatDeliv";
import useWhoDeliv from "./buildWhoWhats/useWhoDeliv";

const useWhoWhats = (date) => {
 
  const whatDeliv = useWhatDeliv(date);
  const whoDeliv = useWhoDeliv(date);

  const database = {
    whatDeliv: whatDeliv,
    whoDeliv: whoDeliv
  };

  return database;
};

export default useWhoWhats;
