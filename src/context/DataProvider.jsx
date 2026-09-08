import  { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6a89a7d220fcac8c1edee633.mockapi.io/api/v1/products")
      .then((response) => response.json())
      .then((data) => { setData(data[0])});
  }, []);


  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};