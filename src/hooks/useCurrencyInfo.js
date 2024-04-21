/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    const [data, setData]= useState({});
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; 
    if(month<10)// Note: Month is zero-based, so January is 0
    month = "0"+month
    //console.log(month)
    const day = today.getDate()-1;
    const date = `${year}-${month}-${day}`;
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((res) => setData(res[currency]))
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle error state if needed
        });
        //console.log(temp);
    }, [currency,date])
    ////console.log(data)
    return data;
}
export default useCurrencyInfo;

