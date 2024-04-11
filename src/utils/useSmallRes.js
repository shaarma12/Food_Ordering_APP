import React, { useEffect, useState } from 'react'
import { SMALL_MENU_API } from './constant';

const useSmallRes = (resId) => {
    const [cuis, setCuis] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(SMALL_MENU_API + resId, {
            headers: {
                'x-cors-api-key': "temp_7c027484a2eb23f957b576e060a52264",
            }
        });
        const response = await data.json();
        setCuis(response);
    };
    return cuis;
}

export default useSmallRes
