import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
const useRes = (resId) => {
  const [cuis, setCuis] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = MENU_API + resId;
    const data = await fetch(url, {
      headers: {
        'x-cors-api-key': 'temp_c5e441b9a245e17efe7c1fd50addd0de',
      }
    });
    const response = await data.json();
    setCuis(response);
  };
  return cuis;
};
export default useRes;
