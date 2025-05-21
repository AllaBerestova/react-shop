export const useLocalStorage = () => {
  const getFromLS = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const setToLS = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getFromLS,
    setToLS,
  };
};
