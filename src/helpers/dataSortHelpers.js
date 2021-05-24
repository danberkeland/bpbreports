
export const sortAtoZDataByIndex = (data, index) => {
    data.sort(function (a, b) {
      return a[index] > b[index] ? 1 : -1;
    });
    return data;
  };
  
  export const sortZtoADataByIndex = (data, index) => {
    data.sort(function (a, b) {
      return a[index] < b[index] ? 1 : -1;
    });
    return data;
  };

