import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
const useRes = (resId) => {
  const [cuis, setCuis] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const response = await data.json();
    setCuis(response);
  };
  return cuis;
};
export default useRes;
