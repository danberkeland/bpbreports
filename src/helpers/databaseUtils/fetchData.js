
import { API, graphqlOperation } from "aws-amplify";
import handleDatabaseError from "../errorHandling/databaseError";


const fetchData = async (func, info, limit) => {
  try {
    const data = await API.graphql(graphqlOperation(func, { limit: limit }));
    const dataList = data.data[info].items;
    return dataList;
  } catch (error) {
    handleDatabaseError(info, error)
  }
};

export default fetchData;