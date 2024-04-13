import React, { useEffect, useState } from 'react'
import { SMALL_MENU_API } from './constant';

const useSmallRes = (resId) => {
    const [cuis, setCuis] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const url = SMALL_MENU_API + resId;
        const data = await fetch(url, {
            headers: {
                'x-cors-api-key': 'temp_c5e441b9a245e17efe7c1fd50addd0de',
            }
        });
        const response = await data.json();
        setCuis(response);
    };
    return cuis;
}

export default useSmallRes;
