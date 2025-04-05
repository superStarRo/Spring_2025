import {useState,useEffect}from'react';
import {ApiData} from '../ApiData.js';
export default function useFetchGameDetails(id) {
  const[gameDetails,setGameDetails]=useState(null);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  useEffect(()=>{
    const apiData=new ApiData();
    const fetchGameDetails=async()=>{
      try{
        const details=await apiData.getGameDetailsById(id);
        if(!details)throw new Error("Данные об игре не найдены");
        setGameDetails(details);
      }catch(err){
        console.error("Ошибка при загрузке данных:", err);
        setError(err);
      }finally{
        setLoading(false);
      }
    };
    fetchGameDetails();
  },[id]);
  return {gameDetails,loading,error};
}