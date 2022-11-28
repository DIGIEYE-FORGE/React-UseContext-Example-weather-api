import axios from "axios";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
const MyContext = React.createContext({});

export function useMyContext() {
  return useContext(MyContext);
}

export function MyProvider({ children }) {
  const [data, setData] = useState();
  const getdata = async () => {
    const res = await axios.get(
      "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
    );
    setData(res.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
    {
        data && 
        <MyContext.Provider value={{data}}>{children}</MyContext.Provider>
    }
    </>
  );
}
