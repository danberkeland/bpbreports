import useWhatBake from "./buildWhoWhats/useWhatBake";

const useWhoWhats = (date, location) => {
 
  const whatBake = useWhatBake(date, location);

  const database = {
    whatBake: whatBake,
  };

  return database;
};

export default useWhoWhats;
