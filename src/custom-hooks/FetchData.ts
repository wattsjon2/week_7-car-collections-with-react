import React, { useState, useEffect} from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [droneData, setData] = useState<any>([]);

    async function handelDataFetch(){
        const result = await server_calls.get()
        setData(result)
    }
    // Introducing useEffect hook to add data to react state
    useEffect( () => {
        handelDataFetch();
    }, [] )

    return {droneData, getData:handelDataFetch}
}