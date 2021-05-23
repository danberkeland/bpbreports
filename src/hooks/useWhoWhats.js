import useWhatBake from "./buildWhoWhats/useWhatBake";
import useDatabase from "./useDatabase";

const useWhoWhats = (date, location) => {
  useDatabase();
  const whatBake = useWhatBake(date, location);

  const database = {
    whatBake: whatBake,
  };

  return database;
};

export default useWhoWhats;